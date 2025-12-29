// try {
//   const res=await axios({
//     url:api.invokeUrl
//     method:"post",
//     data:{
//       apiCode: apiCode[newProps.materialType],
//     } ,
//     headers:{
//       "Content-Type": "application/json",
//       "x-tif-paasid": "platform-portal",
//       "x-tif-timestamp": timestamp,
//       "x-tif-nonce": nonce,
//       "x-tif-signature": signature,
//     }
//   })
//   return res.data
// }catch(error){
//   console.log.error("调用失败",error)
//   throw error
// }
function getaction(inputParams) {
  const params = inputParams || {
    Blocks: [
      {
        dk_id: "test",
        WKT: "POLYGON((110.390113987 22.101244712,110.39021563 22.101269312,110.390238993 22.101185485,110.390143555 22.101163137,110.390113987 22.101244712))",
        wkid: "4490",
      },
    ],
    InCoorFormat: "WKT",
    SFFHTX: true,
    yearMonth: "2023",
    AnalysisID: "test",
    OutCoorFormat: "WKT",
    ApplicationGuID: "46b553-0e537d-ff21950-0c5d31eb6977",
  };
  const passToken = "ZPpcxU4Xu3ErMGHqzGRVObtDgfaukOI3";
  const { timestamp, nonce, signature } = generateAuthparams(passToken);
  defHttp
    .post(
      {
        url: api.invokeUrl,
        data: {
          apiCode: 202512292619794,
          params,
          headers: {
            "Content-Type": "application/json",
            "x-tif-paasid": "platform-portal",
            "x-tif-timestamp": timestamp,
            "x-tif-nonce": nonce,
            "x-tif-signature": signature,
          },
        },
      },
      { withToken: true }
    )
    .then((res) => {
      const resData = res.data;
      console.log("调用成功", resData);
    })
    .catch((error) => {
      console.log.error("调用失败", error);
    });
}
