// type
import { ShopRemove } from "iconsax-react";
import { AES, enc } from "crypto-js";
import * as url from "../store/constant/Endpoints";
import { MdHome } from "react-icons/md";
import { BsBuildingFillAdd } from "react-icons/bs";
import { TbRulerMeasure } from "react-icons/tb";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { TbHomeCog } from "react-icons/tb";
import { MdOutlineHomeWork } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { GrHostMaintenance } from "react-icons/gr";
// icons
const icons = {
  navigation: MdHome,
  propertyType: TbHomeCog,
  amenities: BsBuildingFillAdd,
  flatSize: TbRulerMeasure,
  taxes: HiOutlineReceiptTax,
  notifications: IoMdNotifications,
  property: MdOutlineHomeWork,
  color: MdHome,
  shadow: MdHome,
  clients: FiUsers,
  maintenance: GrHostMaintenance,
};
// let permissionUser = localStorage.getItem("LoginData");
// let permissions = JSON.parse(permissionUser)?.permissions;

let permissionUser = localStorage.getItem("data");

let decryptedData = null;
if (permissionUser) {
  try {
    // Code that may throw an exception
    decryptedData = AES.decrypt(permissionUser, url.encryptionSecret).toString(
      enc.Utf8
    );
    // ...
  } catch (error) {
    console.log(error, "er");
  }
}

const permissions = decryptedData
  ? JSON.parse(decryptedData)?.permissions
  : null;

const allowedPermissions =
  permissions && permissions.length !== 0
    ? permissions.map((permission) => permission?.permission)
    : [];

const permissionsAccessFunction = (brand) => {
  return (
    allowedPermissions &&
    allowedPermissions.length !== 0 &&
    allowedPermissions.some((permission) => permission.includes(brand))
  );
};
// ==============================|| MENU ITEMS - roles ||============================== //

// const domainParameter = permissionsAccessFunction('company') ? {
const domainParameter =
  true


    ? {
      id: "domain-parameter",
      title: "Domain Parameter",
      icon: icons.navigation,
      type: "group",
      children: [
        // allowedPermissions.includes('get-company') ? {
        true ||
          true ||
          true
          ? {
            id: "propertyType",
            title: "Property Type",
            type: "item",
            url: "/propertyType/all-type",
            icon: icons.propertyType,
            breadcrumbs: true,
          }
          : null,
        true || true || true
          ? {
            id: "amenities",
            title: "Amenities",
            type: "item",
            url: "/amenities/all-amenities",
            icon: icons.amenities,
            breadcrumbs: true,
          }
          : null,
        true ||
          true ||
          true
          ? {
            id: "PremisesSize",
            title: "Flat/Shop Size",
            type: "item",
            url: "/premises-size/all-premises-size",
            icon: icons.flatSize,
            breadcrumbs: true,
          }
          : null,
        true || true || true
          ? {
            id: "taxes",
            title: "Taxes",
            type: "item",
            url: "/taxes/all-taxes",
            icon: icons.taxes,
            breadcrumbs: true,
          }
          : null,
        true
          ? {
            id: "notifications",
            title: "All Notifications",
            type: "item",
            url: "/notifications/all-notifications",
            icon: icons.notifications,
            breadcrumbs: true,
          }
          : null,

        true ||
          true ||
          true
          ? {
            id: "all-maintenance",
            title: "Maintenance Type",
            type: "item",
            url: "/maintenance/all-maintenance-type",
            icon: icons.maintenance,
            breadcrumbs: true,
          }
          : null,
      ].filter(Boolean),
    }
    : null;

export default domainParameter;
