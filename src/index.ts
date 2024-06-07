import {createUmi} from "@metaplex-foundation/umi-bundle-defaults";
import {getChildren, getEntryAddressFromName, getRealmAddressFromName, getRealms, RequestStatus} from "gspl-directory";
import {publicKey, unwrapOption} from "@metaplex-foundation/umi";

const CONFIG = publicKey("GrVTaSRsanVMK7dP4YZnxTV6oWLcsFDV1w6MHGvWnWCS");

(async () => {
    const umi = createUmi("ADD YOUR RPC HERE!")
    const entries = await getRealms(umi, CONFIG, RequestStatus.Approved);
    console.log("Entries", entries);
    console.log(entries.length);
})();
