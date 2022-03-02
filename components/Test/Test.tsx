import styles from "./Test.module.css";
import React, { useState, useEffect, useRef } from "react";
import useIPFS from "../../utils/useIPFS";
import axios from "axios";
import useIPFSVideo from "../../utils/useIPFSVideo";

const Test = () => {
  const videoRef = useRef();
  const { captureFile } = useIPFS();
  const [initialBlob, setInitialBlob] = useState(null);
  const [chnageUrl, setChangeUrl] = useState(null);
  const { createArayyOfIPFSLinks, reconstructVideoFromIPFSLinks, videoFile } =
    useIPFSVideo();
  const arrayOfIPFSLinks = [
    "https://ipfs.infura.io/ipfs/QmeCHShZB4K4pcpUfkYunbwu1dcxDhYWmQaThx5LkdA5jt",
    "https://ipfs.infura.io/ipfs/QmQqZqRL7nLKcY5CQBnDuS3XHaUpsnCJPoVW8686oMW7jJ",
    "https://ipfs.infura.io/ipfs/QmXpyjuSkTf5t6ReFJkLcEhaBHqrCivAggjRugvjGBuyXK",
    "https://ipfs.infura.io/ipfs/QmWTCUEqBgRfDwLjXoDqEc1x5xuFsLYpENFmmZzZytjzYx",
    "https://ipfs.infura.io/ipfs/QmayqdPvQr6BViL2jCFhWRW7GdmD1YctULnfL8YvWLr3B1",
    "https://ipfs.infura.io/ipfs/QmXEGfWSdChMqcWBJPR3TaBbZufEHxxpCeY1y5n3YCggPx",
    "https://ipfs.infura.io/ipfs/QmQSLwAxyohL7QyKNuE7cDGQLYP9LDaKSeQqrvSQYXJDCh",
    "https://ipfs.infura.io/ipfs/QmbZjyQLx8RZqkk3Zp9oG8yqPXLNQH8EoBNA8y2C5Lm5rf",
    "https://ipfs.infura.io/ipfs/QmVPZ6ktd4fx8hk6GvNYA9HQQZehH7cPN2uMYFd4eRxWH8",
    "https://ipfs.infura.io/ipfs/QmQVRTzxRgqNoYyYr6M7AxoNGRm4o4yp6iNG9qt3i735H1",
    "https://ipfs.infura.io/ipfs/QmViH8WMFnTMv9ZuHePpJn8HsJrcoB5F2GoFe4BEyTbqB5",
    "https://ipfs.infura.io/ipfs/QmX2L8fRmkRmqqmdisJpAVFgguEzhpKMS4T4u1fdhbfZ3f",
    "https://ipfs.infura.io/ipfs/QmPtprtyQL8yH2X4NpDVKvU6Tq4s6RU7zjw6DTCmcw5P4i",
    "https://ipfs.infura.io/ipfs/QmeKHJtLyivUvN1tJXtYNM1oScJcBukw1wwK9dUsUMJNFN",
    "https://ipfs.infura.io/ipfs/QmaafEZifJqEkwt2ErBxgfvqmb9SSvgbqqcuX6iEnigHbN",
    "https://ipfs.infura.io/ipfs/QmdijLuSSMUdhpUysaaChX4kj9hRYBcwcGV3CpPozAzHK1",
    "https://ipfs.infura.io/ipfs/QmaMMLmVy8ZCYWR2QWgxdkFDo1hqSYs4xyX78oAs8X3FfF",
    "https://ipfs.infura.io/ipfs/QmQmbACUDjmvgvpdgyvwVGzMmLe8XUVGXxHaGdCYJHtMuy",
    "https://ipfs.infura.io/ipfs/QmNNBQxHNqD3mxp8sGpEEWspSRVAPPD3WYD6iGgn8j3H6C",
  ];
  const test1 = [
    "https://ipfs.infura.io/ipfs/QmWqK4ZVMZXeWHuHA8nX6DPqiSHsetZVMAWfgrxE6zJ1Ga",
    "https://ipfs.infura.io/ipfs/QmbHQJDJntL3ymE6H4CXkQQsF9kwUhX4zx13d2vWCcXZCE",
  ];
  const test2 = [
    "https://ipfs.infura.io/ipfs/QmNj9Y7Xbusu4BrQKkWkA43wPw8XtCVzJrRYey8wzicfcC",
    "https://ipfs.infura.io/ipfs/QmVEBzJDT12CbiAXTpGAnSWoM1iuhYJtaFEVuPinDeD2DB",
    "https://ipfs.infura.io/ipfs/QmcPoSYkt93Tbad1MdemxrMH97Wp9wZiTPRwjVDjFGqzfK",
    "https://ipfs.infura.io/ipfs/Qmc67tsptvbUKPvzwV6VAtkDgNhPj4UQFhKuqdaDbPHm3b",
  ];
  const test3 = [
    "https://ipfs.infura.io/ipfs/QmXB4MT3iYJrziTbwoJa68Zp82sTJPcrAX2y4if5JCre7U",
    "https://ipfs.infura.io/ipfs/QmeTox3RxHffXc8PMzw3zvwwnuortzBatqZGUfpm8WyvYo",
    "https://ipfs.infura.io/ipfs/QmSssSrEEA8tVqzssnM4jYbc27dg19Rj4avicadmSgARQz",
    "https://ipfs.infura.io/ipfs/Qmd5z1Fq38ib1eBL9dJSWxaasEWpn5wUJKLUArRbXDB84R",
    "https://ipfs.infura.io/ipfs/QmUs2gyRREirNNqWU1XWXxHDC4UqETusus589JwFd86J5K",
    "https://ipfs.infura.io/ipfs/QmNdL2he4D9K4KbfiV2on1q1Am5atXfFN56QGyaHAQiu5L",
    "https://ipfs.infura.io/ipfs/QmTnEfMM23GXi7ArwYb1YHk2iRKxqx8UbwpS32355cYkFk",
    "https://ipfs.infura.io/ipfs/Qmbbj8i8aWdRYbW5TpbnqPaAEYwcAxJ5gbLPSTCDSLp6yb",
    "https://ipfs.infura.io/ipfs/QmPpo8pyV15RUWp4hchmjK5nsa2KDkdd1fq2rTdMG4vLHu",
    "https://ipfs.infura.io/ipfs/QmTNJ77nabktiFJmZbahZxK5yabKRFLMy8wfBxHxUXQmBr",
    "https://ipfs.infura.io/ipfs/QmYL2FdhF7FbHEiKaPdT3xmewXV16PaSAY3YQGPaDxejbw",
    "https://ipfs.infura.io/ipfs/QmPxDSyy7Y1CT4ktupjbfEndPjXZQF9arDVcFFFfot5DEH",
    "https://ipfs.infura.io/ipfs/QmWYovpxBidHheB1wen2qzbNBvKL4L6EQHnWHgbrKyDd68",
    "https://ipfs.infura.io/ipfs/Qmc5bkAidZBhay2TLdVhYurqYN8nVbXK7nb7EMQkNnAniJ",
    "https://ipfs.infura.io/ipfs/QmegrwuJKuJUnxr43whSfop3oZH9Fcj1E1f2uLjLHLAh9Y",
    "https://ipfs.infura.io/ipfs/QmRKERndjEJ1PNyt5HofAgovrXPL94WGuq5s7nwUf8Vini",
    "https://ipfs.infura.io/ipfs/QmTcCXdzi9CYsbTtRQRZenLxtjE6mc8Cz6MJ6wKZgNvBMf",
    "https://ipfs.infura.io/ipfs/QmcwPZuReA1pSFcVrkYMQ11fLHdNX3LjTy81EeFB1WTJpm",
    "https://ipfs.infura.io/ipfs/QmUaHc18oDs6vdoA4YwQjCeE5CMfadQwVXiketZQQiVk8x",
    "https://ipfs.infura.io/ipfs/QmanpJuucnN4MBq5K9Z8YK44z8yfU7gmZxqJmuKVSQsyig",
    "https://ipfs.infura.io/ipfs/QmYgzkPbJzjrYc1iwyFAA3g3W1ntf21PDZvUDZDsaEcxeR",
    "https://ipfs.infura.io/ipfs/Qmc13WrLJgJnhztuhqaA8VSQeUF7pgdgTUDSzind7Kihch",
    "https://ipfs.infura.io/ipfs/QmZkMJcqnDXd7nPQTz91uoAxrwpEP93qcmD3c19dAYeVhb",
    "https://ipfs.infura.io/ipfs/QmXNN1oiNQPZAeeXr4zYtVMb7D84hvhMK56ToeM7RDUbys",
    "https://ipfs.infura.io/ipfs/QmVN3y8GD7mMbNE8S4p56DXPPUjH6YFW2WQ5Uncj7uRo2D",
    "https://ipfs.infura.io/ipfs/QmfKLryr7znNoyFAeqQm7RzpmMQsx2NCQpY74dpDCfspHn",
    "https://ipfs.infura.io/ipfs/QmesPNe1KCmAzGFwSYw7uYsD3qVwefL5vxFtxFuuAbD6Gh",
    "https://ipfs.infura.io/ipfs/QmTXrcs94XfL3cjfrVcMQVsod9zV55FJDbtcDDt5qmFQGk",
    "https://ipfs.infura.io/ipfs/QmWEpiPcdk1oWaV9SyEbEUTqfGtHDxtVx8FEsn191M9i8x",
    "https://ipfs.infura.io/ipfs/QmY3atHEXUBQ4JNTdemnznMZbWkX4YQHqFY363rBgvZXP5",
    "https://ipfs.infura.io/ipfs/QmZmkiFW7WR4rvzkBZo6cuzkGztAeid2KAnwaePwyWaFnJ",
    "https://ipfs.infura.io/ipfs/QmXeyy9fnHMBG2Fo9JuaBtHASCViL34urbjDHbr7CZWqqs",
    "https://ipfs.infura.io/ipfs/QmfBtd9c1s9CA2wsuwiWUswcWUqDkFnkDdZGQyG1RAq7bb",
    "https://ipfs.infura.io/ipfs/QmS8hJ1dfM8PSMsHhSmzybYKBB45nD3HoLCMdbvYeGZ6UW",
    "https://ipfs.infura.io/ipfs/QmPKdAuGyonc6Tbnz4uJDSkt3tmxoqnvR9NYPME9S4skH5",
    "https://ipfs.infura.io/ipfs/QmYYoaD84cQChZwCnCDN1SehhZn84B31Y6zfqXNu7SE85y",
    "https://ipfs.infura.io/ipfs/QmS7VpBQSJbDMpbNVxzchExkBfkNSVBWaMNYmqYzjXjtu3",
  ];
  const test4 = [
    "https://ipfs.infura.io/ipfs/QmPWMJqsSzBmQ4tYJFdu2RpsfLeEmq8vga8LFp3pfeX3k4",
    "https://ipfs.infura.io/ipfs/QmRHyQb8yVZpndR8k3T5KEwWrVE26aZY7yWRTABb1Guf4f",
  ];
  const test5 = [
    "https://ipfs.infura.io/ipfs/QmPWMJqsSzBmQ4tYJFdu2RpsfLeEmq8vga8LFp3pfeX3k4",
    "https://ipfs.infura.io/ipfs/QmRHyQb8yVZpndR8k3T5KEwWrVE26aZY7yWRTABb1Guf4f",
  ];
  const test6 = [
    "https://ipfs.infura.io/ipfs/QmfG6K5HDpyYvoA94PyrPXa26cwrMasjX5BHmDPFzxPaqv",
  ];
  const test7 = [
    "https://ipfs.infura.io/ipfs/QmPWMJqsSzBmQ4tYJFdu2RpsfLeEmq8vga8LFp3pfeX3k4",
    "https://ipfs.infura.io/ipfs/QmRHyQb8yVZpndR8k3T5KEwWrVE26aZY7yWRTABb1Guf4f",
  ];
  useEffect(() => {
    if (initialBlob) {
      createArayyOfIPFSLinks(initialBlob);
    }
  }, [initialBlob]);
  useEffect(() => {
    // reconstructVideoFromIPFSLinks(test1);
    // reconstructVideoFromIPFSLinks(arrayOfIPFSLinks);
    // reconstructVideoFromIPFSLinks(test2);
    // reconstructVideoFromIPFSLinks(test3);
    // reconstructVideoFromIPFSLinks(arrayOfIPFSLinks);
    // reconstructVideoFromIPFSLinks(test7);
  }, []);
  useEffect(() => {
    setChangeUrl(videoFile);
  }, [videoFile]);
  useEffect(() => {
    // if (videoRef !== undefined) {
    //   console.log(videoRef.current.currentTime);
    //   videoRef.current.timeUpdate;
    // }
  }, []);

  const hi = () => {
    console.log(videoRef.current.currentTime);
  };

  /* -------------------------------------------------------------------------- */

  return (
    <div className={styles.container}>
      <input
        type="file"
        onChange={(e) =>
          captureFile(e).then((res) => [setInitialBlob(res), console.log(res)])
        }
      />

      <iframe
        // onTimeUpdate={hi()}
        ref={videoRef}
        height="600"
        width="1350"
        src={chnageUrl}
        allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <video src={videoFile} controls></video> */}
    </div>
  );
};

export default Test;
