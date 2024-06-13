import{N as e,U as S}from"./index-8a2cb146.js";const o={getInvoiceList:t=>e({method:"post",url:S.BUSINESS.GET_INVOICE_LIST,data:t}),getInvoiceListDetail:t=>e({method:"post",url:S.BUSINESS.GET_INVOICE_LIST_DETAIL,data:t}),addUpInvoice:t=>e({method:"post",url:S.BUSINESS.ADD_UP_INVOICE,data:t,headers:{"Content-Type":"multipart/form-data"}}),delInvoice:t=>e({method:"post",url:S.BUSINESS.DEL_INVOICE,data:t}),delInvoiceFile:t=>e({method:"post",url:S.BUSINESS.DEL_FILE,data:t}),downLoadInvoiceFile:t=>e({method:"post",url:S.BUSINESS.INVOICE_DOWNLOAD,data:t,headers:{"Content-Type":"multipart/form-data"},responseType:"blob"}),getInsurAnceList:t=>e({method:"post",url:S.BUSINESS.GET_INSURANCE_LIST,data:t}),delInsurAnce:t=>e({method:"post",url:S.BUSINESS.DEL_INSURANCE_LIST,data:t}),getInsurAnceListDetail:t=>e({method:"post",url:S.BUSINESS.GET_INSURANCE_LIST_DETAIL,data:t}),updateInsurAnce:t=>e({method:"post",url:S.BUSINESS.UPDATE_INSURANCE_LIST_DETAIL,data:t}),addInsurAnce:t=>e({method:"post",url:S.BUSINESS.ADD_INSURANCE_SAVE,data:t}),getDeckingList:t=>e({method:"post",url:S.BUSINESS.GET_DOCKING_LIST,data:t}),viewDecking:t=>e({method:"post",url:S.BUSINESS.VIEW_DOCKING_DETAIL,data:t}),cancelBusiness:t=>e({method:"post",url:S.BUSINESS.CANCEL_INSUR_CONTRACT,data:t}),contractDownLoad:t=>e({method:"post",url:S.BUSINESS.INSUR_CONTRACT_DOWNLOAD,data:t,headers:{"Content-Type":"multipart/form-data"},responseType:"blob"}),batchApplyOrderInsure:t=>e({method:"post",url:S.BUSINESS.BATCH_APPLY_ORDER_AGAIN,data:t}),batchReviewInsure:t=>e({method:"post",url:S.BUSINESS.BATCH_REVIEW_ORDER,data:t}),getPaperContractList:t=>e({method:"post",url:S.BUSINESS.GET_PAPER_CONTRACT_LIST,data:t}),isSureContract:t=>e({method:"post",url:S.BUSINESS.ISSUE_CONTRACT,data:t}),delRecipient:t=>e({method:"post",url:S.BUSINESS.DEL_RECIPIENT,data:t}),getRecipientDetail:t=>e({method:"post",url:S.BUSINESS.GET_PAPER_CONTRACT_DETAIL,data:t}),getDepartsBox:t=>e({method:"post",url:S.BUSINESS.GET_DEPARTS_BOX,data:t}),getRecipientBox:t=>e({method:"post",url:S.BUSINESS.GET_RECIPIENT_BOX,data:t}),batchArchiving:t=>e({method:"post",url:S.BUSINESS.BUTCH_ARCHIVING,data:t}),getContractList:t=>e({method:"post",url:S.BUSINESS.GET_CONTRACT_LIST,data:t}),getContractDetail:t=>e({method:"post",url:S.BUSINESS.GET_CONTRACT_DETAIL,data:t}),cancelContract:t=>e({method:"post",url:S.BUSINESS.CANCEL_CONTRACT,data:t}),sendMessage:t=>e({method:"post",url:S.BUSINESS.SEND_MESSAGE,data:t,timeout:300*1e3}),contractApplyAgain:t=>e({method:"post",url:S.BUSINESS.CONTRACT_APPLY_AGAIN,data:t,timeout:300*1e3}),contractToSaveRemark:t=>e({method:"post",url:S.BUSINESS.CONTRACT_TO_SAVE_REMARK,data:t}),contractDownFile:t=>e({method:"post",url:S.BUSINESS.CONTRACT_DOWN_FILE,data:t,responseType:"blob",headers:{"Content-Type":"multipart/form-data"}}),getInvoiceApplicationList:t=>e({method:"post",url:S.BUSINESS.INVOICE_APPLICATION_LIST,data:t}),getInvoiceApplicationDetail:t=>e({method:"post",url:S.BUSINESS.INVOICE_APPLICATION_DETAIL,data:t}),applyInvoicing:t=>e({method:"post",url:S.BUSINESS.INVOICE_APPLICATION,data:t}),getInvoiceHistoryList:t=>e({method:"post",url:S.BUSINESS.INVOICE_HISTORY_LIST,data:t}),contractToBatch:t=>e({method:"post",url:S.BUSINESS.CONTRACT_TO_BATCH,data:t}),batchReviewContract:t=>e({method:"post",url:S.BUSINESS.BATCH_REVIEW_CONTRACT,data:t}),getInvoicePlatformExamineList:t=>e({method:"post",url:S.BUSINESS.INVOICE_PLATFORM_EXAMINE_LIST,data:t}),examineInvoicePlatform:t=>e({method:"post",url:S.BUSINESS.INVOICE_PLATFORM_EXAMINE,data:t}),getInvoiceFinanceExamineList:t=>e({method:"post",url:S.BUSINESS.INVOICE_FINANCE_EXAMINE_LIST,data:t}),examineInvoiceFinance:t=>e({method:"post",url:S.BUSINESS.INVOICE_FINANCE_EXAMINE,data:t}),uploadInvoiceFile:t=>e({method:"post",url:S.BUSINESS.INVOICE_UPLOAD,data:t,headers:{"Content-type":"multipart/form-data"}})};export{o as B};
