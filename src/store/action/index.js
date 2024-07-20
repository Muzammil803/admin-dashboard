import shop from "../shop/shop";
import * as types from "../constant/ActionType";

export const fssetchsogsinUser = (data) => ({
  type: types.FETCH_LOGIN_DATA,
  data,
});
export const ForgetPasswordz = (data) => ({
  type: types.FORGET_PASSWORD,
  data,
});

export const brandoownerRegis = (data) => ({
  type: types.REGISTER_BRAND_OWNER,
  data,
});

export const updatestatuscodes = (data) => ({
  type: types.UPDATE_STATUS_CODE,
  data,
});

export const specificroless = (data) => ({
  type: types.CREATE_ROLE,
  data,
});

export const Childassigpermissions = (data) => ({
  type: types.ASSIGN_PERMISSIONS,
  data,
});

export const childALLPermisssions = (data) => ({
  type: types.GETALL_PERMISSION,
  data,
});
export const rolePermissions = (data) => ({
  type: types.ROLE_PERMISSIONS,
  data,
});

export const contantAllviewroless = (data) => ({
  type: types.VIEW_ROLES,
  data,
});
export const viewOfAllUsers = (data) => ({
  type: types.VIEW_USERS,
  data,
});
export const viewOfAllProducts = (data) => ({
  type: types.VIEW_PRODUCTS,
  data,
});

// export const viewReportProblem = (data) => ({
//   type: types.VIEW_REPORT_PROBLEM,
//   data,
// });

// export const getNumberOfSerialsForBatch = (data) => ({
//   type: types.GET_SERIAL_FOR_BATCH,
//   data,
// });
// export const getBatchByProducts = (data) => ({
//   type: types.GET_BATCH_PRODUCT,
//   data,
// });

export const viewOfAllActiveProducts = (data) => ({
  type: types.VIEW_ACTIVE_PRODUCTS,
  data,
});
export const updateStatusUser = (data) => ({
  type: types.UPDATE_STATUS_USERS,
  data,
});

export const updateStatusBrand = (data) => ({
  type: types.UPDATE_STATUS_BRAND,
  data,
});

export const edituserChild = (data) => ({
  type: types.EDIT_USER,
  data,
});

export const allbrandgetchild = (data) => ({
  type: types.ALL_BRAND,
  data,
});

// export const FetchallFAQs = (data) => ({
//   type: types.ALL_FAQS,
//   data,
// });

// export const FetchallTerms = (data) => ({
//   type: types.ALL_TERMS,
//   data,
// });

export const brandgetoneDetails = (data) => ({
  type: types.BRAND_ONE_DETAIL,
  data,
});

export const brandediting = (data) => ({
  type: types.BRAND_EDIT,
  data,
});

export const getallcategeorychild = (data) => ({
  type: types.GETALL_CATEGEORY,
  data,
});

// export const getAllColorShift = (data) => ({
//   type: types.GET_ALL_COLOR_SHIFT,
//   data,
// });

export const categorystatusupdate = (data) => ({
  type: types.STATUS_UPDATE_CATEGORY,
  data,
});

// export const categoryfetchregister = (data) => ({
//   type: types.REGISTER_CATEGORY_STORE,
//   data,
// });

// export const editcatgorychild = (data) => ({
//   type: types.EDIT_CATEGORY,
//   data,
// });

// export const editcolorshift = (data) => ({
//   type: types.EDIT_COLOR_SHIFT,
//   data,
// });

// export const editsmsReply = (data) => ({
//   type: types.EDIT_SMSREPLY,
//   data,
// });

// export const subcategorygetall = (data) => ({
//   type: types.ALL_SUB_CATEGORIES,
//   data,
// });

// export const smsReplygetAll = (data) => ({
//   type: types.ALL_SMS_REPLY,
//   data,
// });
export const subcategoryupdatestats = (data) => ({
  type: types.SUB_CATEGORY_SATUS_UPDATE,
  data,
});

export const categorysubediting = (data) => ({
  type: types.EDIT_SUB_CATEGORY,
  data,
});

// export const subcategorycreating = (data) => ({
//   type: types.CREATE_SUB_CATEGORY,
//   data,
// });

export const allcompanychild = (data) => ({
  type: types.ALL_COMPANY,
  data,
});

// export const Progressive = (data) => ({
//   type: types.PROGRESSIVE_CODES,
//   data,
// });
export const allBatchesActions = (data) => ({
  type: types.ALL_BATCHES,
  data,
});

export const allBatchesCompany = (data) => ({
  type: types.ALL_BATCHES_COMPANY,
  data,
});

// export const createcompanies = (data) => ({
//   type: types.CREATE_COMPANY,
//   data,
// });

// export const statusupdatecompany = (data) => ({
//   type: types.STATUS_UPDATE_COMPANY,
//   data,
// });

export const companydetailuser = (data) => ({
  type: types.COMPANY_DETAIL_ONE_USER,
  data,
});

export const allcount = (data) => ({
  type: types.All_COUNTS,
  data,
});

export const viewAllRandomCode = (data) => ({
  type: types.All_RANDOM_CODE,
  data,
});

// export const postRandomCode = (data) => ({
//   type: types.REQUEST_RANDOM_CODE,
//   data,
// });

// export const PostSMSReplies = (data) => ({
//   type: types.POST_SMS_REPLY,
//   data,
// });
export const PostChangePassword = (data) => ({
  type: types.CHANGE_PASSWORD,
  data,
});

// export const PostUpdateFAQs = (data) => ({
//   type: types.POST_UPDATE_FAQS,
//   data,
// });

export const exportcsvchild = (data) => ({
  type: types.EXPORT_CSV,
  data,
});

// export const exportcsvQRchild = (data) => ({
//   type: types.EXPORT_QR_CSV,
//   data,
// });

// export const PostUpdateTerms = (data) => ({
//   type: types.POST_UPDATE_TERMS,
//   data,
// });

// export const getcsv = (data) => ({
//   type: types.GET_CSV,
//   data,
// });

// export const viewAllSMSReport = (data) => ({
//   type: types.ALL_SMS_REPORT,
//   data,
// });

// export const viewAllQrcodeReport = (data) => ({
//   type: types.ALL_QRCODE_REPORT,
//   data,
// });

export const CompanyCsv = (data) => ({
  type: types.EXPORT_CSV_COMPANY,
  data,
});
export const ReportProblemCsv = (data) => ({
  type: types.EXPORT_CSV_REPORT_PROBLEM,
  data,
});

export const exportCsvcategory = (data) => ({
  type: types.EXPORT_CSV_CATEGORYIES,
  data,
});

export const exportcsvCodeRandoms = (data) => ({
  type: types.EXPORT_CSV_RANDOM_CODE,
  data,
});

export const mapData = (data) => ({
  type: types.MAP_DATA,
  data,
});

// ////////////////////////////////////////////////////////////////// E-Paisa Changer =====================================>

// <----------------- Property Type ---------------->

export const allPropertyData = (data) => ({
  type: types.GET_ALL_PROPERTY_TYPE,
  data,
});
export const allActivePropertyData = (data) => ({
  type: types.GET_ALL_ACTIVE_PROPERTY_TYPE,
  data,
});
export const createPropertyData = (data) => ({
  type: types.CREATE_PROPERTY_TYPE,
  data,
});
export const updatePropertyData = (data) => ({
  type: types.UPDATE_PROPERTY_TYPE,
  data,
});
export const updateStatusPropertyData = (data) => ({
  type: types.UPDATE_PROPERTY_STATUS_TYPE,
  data,
});

export const tenAntDletreChild = (data) => ({
  type: types.TENANT_DELETE,
  data,
});

export const premisesdEletechild = (data) => ({
  type: types.PREMISES_DELETE,
  data,
});

export const propertDletechildd = (data) => ({
  type: types.PROPERTY_DLETE,
  data,
});

// <----------------- Property Type ---------------->

// <-------------------------Dashboard---------------------------------->

export const allDashboardsData = (data) => ({
  type: types.GET_ALL_DASHBOARD,
  data,
});

// <-------------------------Dashboard---------------------------------->

export const allNotificationData = (data) => ({
  type: types.GET_ALL_NOTIFICATION,
  data,
});
// <----------------- Amenities  ---------------->

export const allAmenitiesData = (data) => ({
  type: types.GET_ALL_AMENITIES,
  data,
});
export const allActiveAmenitiesData = (data) => ({
  type: types.GET_ALL_ACTIVE_AMENITIES,
  data,
});
export const createAmenitiesData = (data) => ({
  type: types.CREATE_AMENITIES,
  data,
});
export const updateAmenitiesData = (data) => ({
  type: types.UPDATE_AMENITIES,
  data,
});
export const updateStatusAmenitiesData = (data) => ({
  type: types.UPDATE_AMENITIES_STATUS,
  data,
});

// <----------------- Amenities  ---------------->

// <----------------- FlatSize  ---------------->

export const allFlatSizeData = (data) => ({
  type: types.GET_ALL_FLAT_SIZE,
  data,
});
export const allActiveFlatSizeData = (data) => ({
  type: types.GET_ALL_ACTIVE_FLAT_SIZE,
  data,
});
export const createFlatSizeData = (data) => ({
  type: types.CREATE_FLAT_SIZE,
  data,
});
export const updateFlatSizeData = (data) => ({
  type: types.UPDATE_FLAT_SIZE,
  data,
});
export const updateStatusFlatSizeData = (data) => ({
  type: types.UPDATE_FLAT_SIZE_STATUS,
  data,
});

// <----------------- FlatSize  ---------------->

// <----------------- Flat  ---------------->

export const allFlatData = (data) => ({
  type: types.GET_ALL_FLAT,
  data,
});
export const allActiveFlatData = (data) => ({
  type: types.GET_ALL_ACTIVE_FLAT,
  data,
});
export const createFlatData = (data) => ({
  type: types.CREATE_FLAT,
  data,
});
export const updateFlatData = (data) => ({
  type: types.UPDATE_FLAT,
  data,
});
export const updateStatusFlatData = (data) => ({
  type: types.UPDATE_FLAT_STATUS,
  data,
});

// <----------------- Flat ---------------->

// <----------------- Maintenance  ---------------->
export const allMaintenanceData = (data) => ({
  type: types.GET_ALL_MANAGEMENT,
  data,
});
export const allMaintenance = (data) => ({
  type: types.ALL_MAINTENANCE,
  data,
});

export const allActiveMaintenance = (data) => ({
  type: types.ALL_ACTIVE_MAINTENANCE_TYPE,
  data,
});

export const updatemaintypeChillld = (data) => ({
  type: types.UPDATE_MAINTENANCE_TYPE_STATUS,
  data,
});

export const editmaintypeChillld = (data) => ({
  type: types.EDIT_MAINTENANCE_TYPE_STATUS,
  data,
});
export const updateStatusMaintenance = (data) => ({
  type: types.UPDATE_MAINTENANCE_STATUS,
  data,
});
export const createMaintenance = (data) => ({
  type: types.CREATE_ADD_MAINTENANCE,
  data,
});
export const updateMaintenance = (data) => ({
  type: types.UPDATE_EDIT_MAINTENANCE,
  data,
});

// <----------------- Maintenance  ---------------->

// <----------------- Taxes  ---------------->

export const allTaxesData = (data) => ({
  type: types.GET_ALL_TAXES,
  data,
});
export const createTaxesData = (data) => ({
  type: types.CREATE_TAXES,
  data,
});
export const createMaintenanceChild = (data) => ({
  type: types.CREATE_MAINTENANCE_TYPE,
  data,
});

export const updateTaxesData = (data) => ({
  type: types.UPDATE_TAXES,
  data,
});
export const updateStatusTaxesData = (data) => ({
  type: types.UPDATE_TAXES_STATUS,
  data,
});

export const clientsDisall = (data) => ({
  type: types.CLIENT_ALL_VIEW,
  data,
});

export const ClientsDetails = (data) => ({
  type: types.CLIENT_ALL_DETAILS,
  data,
});

export const createclientChild = (data) => ({
  type: types.CREATE_CLIENTS,
  data,
});

export const updateclient = (data) => ({
  type: types.UPDATE_CLIENTS,
  data,
});

// <----------------- Taxes  ---------------->

// <----------- Allproperty-------------------->

export const createAllPropertyData = (data) => ({
  type: types.CREATE_ALL_PROPERTY,
  data,
});
export const getAllActivePropertyData = (data) => ({
  type: types.GET_ALL_ACTIVE_PROPERTY,
  data,
});
export const getAllPropertyData = (data) => ({
  type: types.GET_ALL_PROPERTY,
  data,
});

export const getAllActiveTaxData = (data) => ({
  type: types.GET_ALL_ACTIVE_TAX,
  data,
});
export const getPropertyPremesisById = (data) => ({
  type: types.GET_PROPERTY_PREMESIS,
  data,
});
export const updateAllPropertyData = (data) => ({
  type: types.UPDATE_PROPERTY,
  data,
});

export const allChildassignper = (data) => ({
  type: types.ALL_ASSIGN_PERMISSIONS,
  data,
});

export const allDetailsAssignPremises = (data) => ({
  type: types.ALL_ASSIGN_PREMISES_DETAILS,
  data,
});
// <----------- Allproperty-------------------->

export const creatassignchildpermi = (data) => ({
  type: types.CREATE_ASSIGN_PERMISSION,
  data,
});

//  <------------------------- Payments ------------------------->
export const getPaymentDataByUniqueId = (data) => ({
  type: types.PAYMENT_UNIQUE_ID,
  data,
});
export const createAddPayment = (data) => ({
  type: types.CREATE_PAYMENT,
  data,
});
export const removeChildNoti = (data) => ({
  type: types.REMOVE_NOTIFICATION,
  data,
});

export const getAllPayment = (data) => ({
  type: types.GET_PAYMENT,
  data,
});

// <-------------------------- Users ------------------------>
export const createAddCurrency = (data) => ({
  type: types.CREATE_ADD_CURRENCY,
  data,
});
export const editUpdateUser = (data) => ({
  type: types.EDIT_UPDATE_USERS,
  data,
});
export const getAllCurrency = (data) => ({
  type: types.GET_ALL_CURRENCY,
  data,
});

// <-------------------------- Users ------------------------>

// <-------------------------- Notfication ------------------------>
export const allNotification = (data) => ({
  type: types.ALL_NOTIFICATION,
  data,
});

export const premisefilterchildd = (data) => ({
  type: types.PREMISES_FILTERS,
  data,
});

//  <------------------------- Reports ------------------------->

export const allreportchild = (data) => ({
  type: types.ALL_REPORTS,
  data,
});
export const reportagainpayme = (data) => ({
  type: types.REPORT_BY_PAYMENT,
  data,
});
export const reportagaimonth = (data) => ({
  type: types.REPORT_BY_MONTH,
  data,
});

export const reportagainnclient = (data) => ({
  type: types.REPORT_BY_CLIENT,
  data,
});

export const reportschildbypropertues = (data) => ({
  type: types.REPORTS_BY_PROPERTY,
  data,
});

export const reportbychildflatshopss = (data) => ({
  type: types.REPORTS_BY_FLATS_SHOPS,
  data,
});

export const FetchReportActionReportFlatShops = (data) => (dispatch) => {
  shop.FetchReportActionReportFlatShops(data, (e) => {
    dispatch(reportbychildflatshopss(e, data));
  });
};

export const FetchReportActionPropertyy = (data) => (dispatch) => {
  shop.FetchReportActionPropertyy(data, (e) => {
    dispatch(reportschildbypropertues(e, data));
  });
};

export const FetchAllRepotsData = (data) => (dispatch) => {
  shop.FetchAllRepotsData(data, (e) => {
    dispatch(allreportchild(e, data));
  });
};

export const FetchReportsByMonths = (data) => (dispatch) => {
  shop.FetchReportsByMonths(data, (e) => {
    dispatch(reportagaimonth(e, data));
  });
};

export const FetchReportByClientss = (data) => (dispatch) => {
  shop.FetchReportByClientss(data, (e) => {
    dispatch(reportagainnclient(e, data));
  });
};
export const FetchhReportssByPaymentes = (data) => (dispatch) => {
  shop.FetchhReportssByPaymentes(data, (e) => {
    dispatch(reportagainpayme(e, data));
  });
};

export const FetchFilterPremises = (data) => (dispatch) => {
  shop.FetchFilterPremises(data, (e) => {
    dispatch(premisefilterchildd(e, data));
  });
};

export const CreateAllProperty = (data) => (dispatch) => {
  shop.CreateAllProperty(data, (e) => {
    dispatch(createAllPropertyData(e, data));
  });
};
export const UpdateAllProperty = (data) => (dispatch) => {
  shop.UpdateAllProperty(data, (e) => {
    dispatch(updateAllPropertyData(e, data));
  });
};
export const GetAllActiveProperty = (data) => (dispatch) => {
  shop.GetAllActiveProperty(data, (e) => {
    dispatch(getAllActivePropertyData(e, data));
  });
};
export const GetAllProperty = (data) => (dispatch) => {
  shop.GetAllProperty(data, (e) => {
    dispatch(getAllPropertyData(e, data));
  });
};

export const GetAllActiveTax = (data) => (dispatch) => {
  shop.GetAllActiveTax(data, (e) => {
    dispatch(getAllActiveTaxData(e, data));
  });
};

export const GetPropertyPremesis = (data) => (dispatch) => {
  shop.GetPropertyPremesis(data, (e) => {
    dispatch(getPropertyPremesisById(e, data));
  });
};

export const AllFetchAssignPermiss = (data) => (dispatch) => {
  shop.AllFetchAssignPermiss(data, (e) => {
    dispatch(allChildassignper(e, data));
  });
};

export const AllAssPreDetails = (data) => (dispatch) => {
  shop.AllAssPreDetails(data, (e) => {
    dispatch(allDetailsAssignPremises(e, data));
  });
};

export const REmoveFetchNotifiction = (data) => (dispatch) => {
  shop.REmoveFetchNotifiction(data, (e) => {
    dispatch(removeChildNoti(e, data));
  });
};

// <-------------------------------Property-------------------------------------------->

// <----------------- Property Type ---------------->

export const GetPropertyType = (data) => (dispatch) => {
  shop.GetPropertyType(data, (e) => {
    dispatch(allPropertyData(e, data));
  });
};
export const GetActivePropertyType = (data) => (dispatch) => {
  shop.GetActivePropertyType(data, (e) => {
    dispatch(allActivePropertyData(e, data));
  });
};

export const CreatePropertyType = (data) => (dispatch) => {
  shop.CreatePropertyType(data, (e) => {
    dispatch(createPropertyData(e, data));
  });
};

export const CreateClientsFetch = (data) => (dispatch) => {
  shop.CreateClientsFetch(data, (e) => {
    dispatch(createclientChild(e, data));
  });
};

export const CreateFetchAssignPermissiosn = (data) => (dispatch) => {
  shop.CreateFetchAssignPermissiosn(data, (e) => {
    dispatch(creatassignchildpermi(e, data));
  });
};
export const UpdatePropertyType = (data) => (dispatch) => {
  shop.UpdatePropertyType(data, (e) => {
    dispatch(updatePropertyData(e, data));
  });
};
export const fetchEditClients = (data) => (dispatch) => {
  shop.fetchEditClients(data, (e) => {
    dispatch(updateclient(e, data));
  });
};
export const UpdateStatusPropertyType = (data) => (dispatch) => {
  shop.UpdateStatusPropertyType(data, (e) => {
    dispatch(updateStatusPropertyData(e, data));
  });
};

export const FetchDeletETenant = (data) => (dispatch) => {
  shop.FetchDeletETenant(data, (e) => {
    dispatch(tenAntDletreChild(e, data));
  });
};

export const FetchDeleteProperty = (data) => (dispatch) => {
  shop.FetchDeleteProperty(data, (e) => {
    dispatch(propertDletechildd(e, data));
  });
};

export const FetchDeletPremises = (data) => (dispatch) => {
  shop.FetchDeletPremises(data, (e) => {
    dispatch(premisesdEletechild(e, data));
  });
};

// <----------------- Property Type ---------------->

// <----------------------Dashboard--------------------->
export const getAllDashboard = (data) => (dispatch) => {
  shop.getAllDashboard(data, (e) => {
    dispatch(allDashboardsData(e, data));
  });
};
// <----------------------Dashboard--------------------->


// <----------------- Amenities  ---------------->

export const GetAllAmenities = (data) => (dispatch) => {
  shop.GetAmenitiesType(data, (e) => {
    dispatch(allAmenitiesData(e, data));
  });
};
export const GetAllActiveAmenities = (data) => (dispatch) => {
  shop.GetAllActiveAmenities(data, (e) => {
    dispatch(allActiveAmenitiesData(e, data));
  });
};

export const CreateAmenities = (data) => (dispatch) => {
  shop.CreateAmenitiesType(data, (e) => {
    dispatch(createAmenitiesData(e, data));
  });
};
export const UpdateAmenities = (data) => (dispatch) => {
  shop.UpdateAmenitiesType(data, (e) => {
    dispatch(updateAmenitiesData(e, data));
  });
};
export const UpdateStatusAmenities = (data) => (dispatch) => {
  shop.UpdateStatusAmenitiesType(data, (e) => {
    dispatch(updateStatusAmenitiesData(e, data));
  });
};

// <----------------- Amenities  ---------------->

// <----------------- Flat size  ---------------->

export const GetAllFlatSize = (data) => (dispatch) => {
  shop.GetFlatSize(data, (e) => {
    dispatch(allFlatSizeData(e, data));
  });
};
export const GetAllActiveFlatSize = (data) => (dispatch) => {
  shop.GetActiveFlatSize(data, (e) => {
    dispatch(allActiveFlatSizeData(e, data));
  });
};

export const GetchAllClientData = (data) => (dispatch) => {
  shop.GetchAllClientData(data, (e) => {
    dispatch(clientsDisall(e, data));
  });
};

export const AllClientDetails = (data) => (dispatch) => {
  shop.AllClientDetails(data, (e) => {
    dispatch(ClientsDetails(e, data));
  });
};

export const CreateFlatSize = (data) => (dispatch) => {
  shop.CreateFlatSize(data, (e) => {
    dispatch(createFlatSizeData(e, data));
  });
};
export const UpdateFlatSize = (data) => (dispatch) => {
  shop.UpdateFlatSize(data, (e) => {
    dispatch(updateFlatSizeData(e, data));
  });
};
export const UpdateStatusFlatSize = (data) => (dispatch) => {
  shop.UpdateStatusFlatSize(data, (e) => {
    dispatch(updateStatusFlatSizeData(e, data));
  });
};

// <----------------- Flat Size  ---------------->
// <----------------- Maintenance  ---------------->

export const GetAllMaintenanceType = (data) => (dispatch) => {
  shop.GetAllMaintenanceType(data, (e) => {
    dispatch(allMaintenanceData(e, data));
  });
};

export const UpdateMaintenanceType = (data) => (dispatch) => {
  shop.UpdateMaintenanceType(data, (e) => {
    dispatch(updatemaintypeChillld(e, data));
  });
};

export const EditMaintenanceType = (data) => (dispatch) => {
  shop.EditMaintenanceType(data, (e) => {
    dispatch(editmaintypeChillld(e, data));
  });
};

export const GetAllMaintenance = (data) => (dispatch) => {
  shop.GetAllMaintenance(data, (e) => {
    dispatch(allMaintenance(e, data));
  });
};

export const AllActiveMaintenanceType = (data) => (dispatch) => {
  shop.AllActiveMaintenance(data, (e) => {
    dispatch(allActiveMaintenance(e, data));
  });
};

export const UpdateStatusMaintenance = (data) => (dispatch) => {
  shop.UpdateStatusMaintenance(data, (e) => {
    dispatch(updateStatusMaintenance(e, data));
  });
};

export const CreateMaintenance = (data) => (dispatch) => {
  shop.CreateMaintenance(data, (e) => {
    dispatch(createMaintenance(e, data));
  });
};

export const UpdateMaintenance = (data) => (dispatch) => {
  shop.UpdateMaintenance(data, (e) => {
    dispatch(updateMaintenance(e, data));
  });
};
// <----------------- Maintenance  ---------------->
// <----------------- Reports  ---------------->

// <----------------- Reports  ---------------->

// <----------------- Taxes  ---------------->

export const GetAllTaxes = (data) => (dispatch) => {
  shop.GetTaxes(data, (e) => {
    dispatch(allTaxesData(e, data));
  });
};

export const CreateTaxes = (data) => (dispatch) => {
  shop.CreateTaxes(data, (e) => {
    dispatch(createTaxesData(e, data));
  });
};

export const FetchMaintenceType = (data) => (dispatch) => {
  shop.FetchMaintenceType(data, (e) => {
    dispatch(createMaintenanceChild(e, data));
  });
};
export const UpdateTaxes = (data) => (dispatch) => {
  shop.UpdateTaxes(data, (e) => {
    dispatch(updateTaxesData(e, data));
  });
};
export const UpdateStatusTaxes = (data) => (dispatch) => {
  shop.UpdateStatusTaxes(data, (e) => {
    dispatch(updateStatusTaxesData(e, data));
  });
};

// <----------------- Taxes  ---------------->

// <----------------- Flat   ---------------->

export const GetAllFlat = (data) => (dispatch) => {
  shop.GetFlat(data, (e) => {
    dispatch(allFlatData(e, data));
  });
};
export const GetAllActiveFlat = (data) => (dispatch) => {
  shop.GetActiveFlat(data, (e) => {
    dispatch(allActiveFlatData(e, data));
  });
};

export const CreateFlat = (data) => (dispatch) => {
  shop.CreateFlat(data, (e) => {
    dispatch(createFlatData(e, data));
  });
};
export const UpdateFlat = (data) => (dispatch) => {
  shop.UpdateFlat(data, (e) => {
    dispatch(updateFlatData(e, data));
  });
};
export const UpdateStatusFlat = (data) => (dispatch) => {
  shop.UpdateStatusFlat(data, (e) => {
    dispatch(updateStatusFlatData(e, data));
  });
};

// <----------------- Flat   ---------------->

// <----------------- Payments --------------------->

export const GetPaymentDataByUniqueId = (data) => (dispatch) => {
  shop.GetPaymentDataByUniqueId(data, (e) => {
    dispatch(getPaymentDataByUniqueId(e, data));
  });
};

export const CreateAddPayment = (data) => (dispatch) => {
  shop.CreateAddPayment(data, (e) => {
    dispatch(createAddPayment(e, data));
  });
};

export const GetAllPayments = (data) => (dispatch) => {
  shop.GetAllPayments(data, (e) => {
    dispatch(getAllPayment(e, data));
  });
};
// <----------------- Payments --------------------->

// <----------------- Users --------------------->

export const CreateAddCurrency = (data) => (dispatch) => {
  shop.CreateAddCurrency(data, (e) => {
    dispatch(createAddCurrency(e, data));
  });
};
export const EditUpdateUser = (data) => (dispatch) => {
  shop.EditUpdateCurrency(data, (e) => {
    dispatch(editUpdateUser(e, data));
  });
};
export const GetAllCurrency = (data) => (dispatch) => {
  shop.GetAllCurrency(data, (e) => {
    dispatch(getAllCurrency(e, data));
  });
};

// <----------------- Users --------------------->

// <------------------ NOTIFICATION ---------------->

export const AllNotification = (data) => (dispatch) => {
  shop.AllNotification(data, (e) => {
    dispatch(allNotification(e, data));
  });
};

// <------------------ NOTIFICATION ---------------->

// ////////////////////////////////////////////////////////////////// E-Paisa Changer =====================================>

export const FetchCSVCmpanyAll = (data) => (dispatch) => {
  shop.FetchCSVCmpanyAll(data, (e) => {
    dispatch(CompanyCsv(e, data));
  });
};
export const FetchCSVReportProblem = (data) => (dispatch) => {
  shop.FetchCSVReportProblem(data, (e) => {
    dispatch(ReportProblemCsv(e, data));
  });
};

export const FetchRegisterBrandOwnerr = (data) => (dispatch) => {
  shop.FetchRegisterBrandOwnerr(data, (e) => {
    dispatch(brandoownerRegis(e, data));
  });
};

export const FetchExportCSV = (data) => (dispatch) => {
  shop.FetchExportCSV(data, (e) => {
    dispatch(exportcsvchild(e, data));
  });
};

export const UpdateStatusCode = (data) => (dispatch) => {
  shop.UpdateStatusCode(data, (e) => {
    dispatch(updatestatuscodes(e, data));
  });
};
export const fetchLoginUser = (data) => (dispatch) => {
  shop.fetchLoginUser(data, (e) => {
    dispatch(fssetchsogsinUser(e, data));
  });
};
export const ForgetPassword = (data) => (dispatch) => {
  shop.ForgetPassword(data, (e) => {
    dispatch(ForgetPasswordz(e, data));
  });
};
export const VerifyOTP = (data) => (dispatch) => {
  shop.VerifyOTP(data, (e) => {
    dispatch(ForgetPasswordz(e, data));
  });
};

export const CreateFetchRolee = (data) => (dispatch) => {
  shop.CreateFetchRolee(data, (e) => {
    dispatch(specificroless(e, data));
  });
};
export const EditRole = (data) => (dispatch) => {
  shop.EditRole(data, (e) => {
    dispatch(specificroless(e, data));
  });
};

export const FetchAllUsersView = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchAllUsersView(data, (e) => {
    dispatch(viewOfAllUsers(e, data));
  });
};

export const FetchAllActiveProducts = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchAllActiveProducts(data, (e) => {
    dispatch(viewOfAllActiveProducts(e, data));
  });
};
export const FetchUsersStatusUpdateView = (data) => (dispatch) => {
  shop.FetchUsersStatusUpdateView(data, (e) => {
    dispatch(updateStatusUser(e, data));
  });
};
export const FetchProductsStatusUpdateView = (data) => (dispatch) => {
  shop.FetchProductsStatusUpdateView(data, (e) => {
    dispatch(updateStatusUser(e, data));
  });
};

export const FetchBrandStausUpdate = (data) => (dispatch) => {
  shop.FetchBrandStausUpdate(data, (e) => {
    dispatch(updateStatusBrand(e, data));
  });
};
export const FetchAllRoleView = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchAllRoleView(data, (e) => {
    dispatch(contantAllviewroless(e, data));
  });
};

export const AssignPermissionsShop = (data) => (dispatch) => {
  // const history=useHistory()
  shop.AssignPermissionsShop(data, (e) => {
    dispatch(Childassigpermissions(e, data));
  });
};

export const getAllPermissions = (data) => (dispatch) => {
  // const history=useHistory()
  shop.getAllPermissions(data, (e) => {
    dispatch(childALLPermisssions(e, data));
  });
};

export const GetRolePermissions = (data) => (dispatch) => {
  shop.GetRolePermissions(data, (e) => {
    dispatch(rolePermissions(e, data));
  });
};

export const HandleEditUserApi = (data) => (dispatch) => {
  // const history=useHistory()
  shop.HandleEditUserApi(data, (e) => {
    dispatch(edituserChild(e, data));
  });
};
export const HandleEditProductz = (data) => (dispatch) => {
  // const history=useHistory()
  shop.HandleEditProductz(data, (e) => {
    dispatch(edituserChild(e, data));
  });
};

export const FetchAllBrands = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchAllBrands(data, (e) => {
    dispatch(allbrandgetchild(e, data));
  });
};

export const FetchBrandOnesDetail = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchBrandOnesDetail(data, (e) => {
    dispatch(brandgetoneDetails(e, data));
  });
};

export const FetchBrandEditt = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchBrandEditt(data, (e) => {
    dispatch(brandediting(e, data));
  });
};

export const FetchAllCategeory = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchAllCategeory(data, (e) => {
    dispatch(getallcategeorychild(e, data));
  });
};

export const SubCategoryEditing = (data) => (dispatch) => {
  // const history=useHistory()
  shop.SubCategoryEditing(data, (e) => {
    dispatch(categorysubediting(e, data));
  });
};

export const AllCompanies = (data) => (dispatch) => {
  // const history=useHistory()
  shop.AllCompanies(data, (e) => {
    dispatch(allcompanychild(e, data));
  });
};

export const AllBatches = (data) => (dispatch) => {
  // const history=useHistory()
  shop.AllBatches(data, (e) => {
    dispatch(allBatchesActions(e, data));
  });
};

export const AllBatchesByCompany = (data) => (dispatch) => {
  // const history=useHistory()
  shop.AllBatches(data, (e) => {
    dispatch(allBatchesCompany(e, data));
  });
};



export const AllTransactions = (data) => (dispatch) => {
  // const history=useHistory()

};

export const GetAllRandomCode = (data) => (dispatch) => {
  // const history=useHistory()
  shop.GetAllRandom(data, (e) => {
    dispatch(viewAllRandomCode(e, data));
  });
};

export const StatusUpdateBatches = (data) => (dispatch) => {
  // const history=useHistory()
  shop.StatusUpdateBatches(data, (e) => { });
};

export const HandleEditCompany = (data) => (dispatch) => {
  // const history=useHistory()
  shop.HandleEditCompany(data, (e) => { });
};

export const FetchCompanyDetails = (data) => (dispatch) => {
  // const history=useHistory()
  shop.FetchCompanyDetails(data, (e) => {
    dispatch(companydetailuser(e, data));
  });
};

export const ChangePassword = (data) => (dispatch) => {
  shop.ChangePassword(data, (e) => {
    dispatch(PostChangePassword(e, data));
  });
};

// Recieved Qrcode Report
export const GetAllQrcodeReport = (data) => (dispatch) => {
  // const history=useHistory()
  shop.GetAllQrcodeReport(data, (e) => {
    // dispatch(viewAllQrcodeReport(e, data));
  });
};
