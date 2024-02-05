
import { Engine } from '@thirdweb-dev/engine';

const run = async () => {

    const contractAddress = "0xd1e9831bf494ce259b9e98dd209881a8db735125"; // pxelynx dapper contract address
  
    // instantiate engine
    const engine = new Engine({
        url: process.env.THIRDWEB_ENGINE_URL as string,
        accessToken: process.env.THIRDWEB_ENGINE_ACCESS_KEY as string,
      });

    // make contract write through engine
    const queueId = await engine.contract.write(
        "mumbai",
        contractAddress,
        process.env.BACKEND_WALLET_ADDRESS as string,
        {
            functionName: "userActionOnBehalf",
            args: [
                "0xdcd0a26f4e870eb36093f295d0d18c87e079fff649b293649b9fc329a767a0f2", //actionID
                "0xc533eBB05449f80B956308c56b5cE7a9E5f90511" // user wallet address
            ]

        }
    );
}
    run()
      .then(() => process.exit(0))
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
    