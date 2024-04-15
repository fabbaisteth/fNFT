import { isAddress } from 'ethers';
import { ethers } from "hardhat";

async function main() {
    const ERC1155 = await ethers.getContractFactory('MyERC1155');
    const deployer = 0x590A1ADd90cbC6a0B53346b2CF8a78ebdaC24f02;
    const deployTx = await ERC1155.deploy('0x590A1ADd90cbC6a0B53346b2CF8a78ebdaC24f02');
    await deployTx.waitForDeployment();
    console.log("ERC1155 deployed to:", deployTx);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });