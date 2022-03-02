import React, { useEffect, useRef, useState, useCallback } from "react";
import useIPFS from "./useIPFS";
import axios from "axios";

const useIPFSVideo = () => {
  const { uploadToIPFS } = useIPFS();

  const [iPFSArray, setIPFSArray] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  /* -------------------------------------------------------------------------- */
  /* --------------------- return array of IPFS Addresses --------------------- */
  const createArayyOfIPFSLinks = (initialBlob: Blob) => {
    // const file = e.target.files[0];
    const target = initialBlob.size;
    //max upload possible is 104_000_000;
    const maxUploadSized = 104_000_000;
    const numberOfArraysNeededToBeUploaded = Math.ceil(target / maxUploadSized);
    console.log(
      "Number of Arrays to Upload: ",
      numberOfArraysNeededToBeUploaded
    );
    if (numberOfArraysNeededToBeUploaded > 1) {
      const blobsArrayToBeUploadedToIPFS = [];
      let copyBlob = initialBlob.slice();

      for (let i = numberOfArraysNeededToBeUploaded; i > 0; i--) {
        const lengthOfCut = copyBlob.slice(
          0,
          Math.ceil(copyBlob.size / i)
        ).size;

        const hi = copyBlob.slice(0, Math.ceil(copyBlob.size / i));
        const doneBlob = new Blob([hi], {
          type: "video/mp4",
        });
        blobsArrayToBeUploadedToIPFS.push(doneBlob);
        copyBlob = copyBlob.slice(lengthOfCut);
      }
      console.log("FINAL: ", blobsArrayToBeUploadedToIPFS);

      /* ------------------------ submit each block to ipfs ----------------------- */

      uploadBlobsToIpfsAndReturnArrayOfIPFSLinks(
        blobsArrayToBeUploadedToIPFS
      ).then((res) => [
        console.log("ARRAY OF IPFS LINKS", res),
        setIPFSArray(res),
      ]);
    } else {
      const blobsArrayToBeUploadedToIPFS = [initialBlob];
      uploadBlobsToIpfsAndReturnArrayOfIPFSLinks(
        blobsArrayToBeUploadedToIPFS
      ).then((res) => [
        console.log("ARRAY OF IPFS LINKS", res),
        setIPFSArray(res),
      ]);
    }
  };
  /* -------------------------------------------------------------------------- */
  /* ----- take in array of IPFS Links and Reconstruct the Original Video ----- */
  const reconstructVideoFromIPFSLinks = async (arrayOfIPFSLinks: string[]) => {
    const arrayOfBlobs = [];
    for (let i = 0; i < arrayOfIPFSLinks.length; i++) {
      const res = await axios.get(arrayOfIPFSLinks[i], {
        responseType: "blob",
      });
      arrayOfBlobs.push(res.data);
    }
    console.log(arrayOfBlobs);
    const combinedBlob = new Blob(arrayOfBlobs, {
      type: "video/mp4",
    });
    console.log(combinedBlob);

    const url = URL.createObjectURL(combinedBlob);
    console.log("URL FOR FINAL Vid", url);
    setVideoFile(url);
    return url;
  };

  /* ------------------------ submit each block to ipfs ----------------------- */
  /* ----------------------------- HELPER FUNCTION ---------------------------- */

  const uploadBlobsToIpfsAndReturnArrayOfIPFSLinks = async (arrayOfBlobs) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const finalArrayOfIPFSLinks = await Promise.all(
      arrayOfBlobs.map(async (blob, i) => {
        const blobTest1 = new Blob([blob], {
          type: "video/mp4",
        });
        try {
          await delay(5000 * (2 * i));
          const ipfsLink = await uploadToIPFS(blobTest1);

          return ipfsLink;
        } catch (error) {
          await delay(1000 * (100 / i));
          const ipfsLink = await uploadToIPFS(blobTest1);

          return ipfsLink;
        }
      })
    );
    return finalArrayOfIPFSLinks;
  };
  // 'application/octet-stream'
  // "video/mp4"
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  return { createArayyOfIPFSLinks, reconstructVideoFromIPFSLinks, videoFile };
};

export default useIPFSVideo;
