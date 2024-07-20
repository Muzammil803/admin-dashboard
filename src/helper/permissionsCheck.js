import { AES, enc } from "crypto-js";
import * as url from "../store/constant/Endpoints";

const checkPermissions = (item_name) => {
  let permissionUser = localStorage.getItem("data");

  let decryptedData = null;
  if (permissionUser) {
    try {
      // Code that may throw an exception
      decryptedData = AES.decrypt(
        permissionUser,
        url.encryptionSecret
      ).toString(enc.Utf8);
      // ...
    } catch (error) {
      localStorage.clear();
      window.location.reload();
    }
  }
  let permissionsArray = [];

  try {
    permissionsArray = decryptedData && JSON.parse(decryptedData)?.permissions;
  } catch (e) {}
  const isAllow = permissionsArray?.includes(item_name);

  return isAllow;
};

// <---- property type permission ---------->
export const can_add_property_type = checkPermissions("add-property-type");
export const can_edit_property_type = checkPermissions("edit-property-type");
export const can_view_property_type = checkPermissions("view-property-type");
export const can_delete_property_type = checkPermissions(
  "delete-property-type"
);
// <---- property type permission ---------->
// <---- amenities permission ---------->
export const can_add_amenities = checkPermissions("add-amenities");
export const can_view_amenities = checkPermissions("view-amenities");
export const can_edit_amenities = checkPermissions("edit-amenities");
export const can_delete_amenities = checkPermissions("delete-amenities");
// <---- amenities  permission ---------->
// <---- Premises Size permission ---------->
export const can_add_premises_size = checkPermissions("add-premises-size");
export const can_delete_premises_size = checkPermissions("delete-premises-size");
export const can_edit_premises_size = checkPermissions("edit-premises-size");
export const can_view_premises_size = checkPermissions("view-premises-size");
// <---- Premisies Size permission ---------->
// <---- Tax  permission ---------->
export const can_add_tax = checkPermissions("add-taxes");
export const can_view_tax = checkPermissions("view-taxes");
export const can_edit_tax = checkPermissions("edit-taxes");
export const can_delete_tax = checkPermissions("delete-taxes");
// <---- Tax  permission ---------->
// <---- Property  permission ---------->
export const can_add_property = checkPermissions("add-property");
export const can_delete_property = checkPermissions("delete-property");
export const can_view_property = checkPermissions("view-property");
export const can_edit_property = checkPermissions("edit-property");
// <---- Property  permission ---------->
// <---- flat  permission ---------->
export const can_add_flat = checkPermissions("add-flat");
export const can_delete_flat = checkPermissions("delete-flat");
export const can_edit_flat = checkPermissions("edit-flat");
export const can_view_flat = checkPermissions("view-flat");
// <---- flat  permission ---------->
// <---- assign premises  permission ---------->
export const can_add_assign_premises = checkPermissions("add-assign-premises");
export const can_edit_assign_premises = checkPermissions("edit-assign-premises");
export const can_delete_assign_premises = checkPermissions("delete-assign-premises");
export const can_view_assign_premises = checkPermissions(
  "view-assign-premises"
);
// <---- assign premises permission ---------->
// <---- clients  permission ---------->
export const can_add_clients = checkPermissions("add-clients");
export const can_delete_clients = checkPermissions("delete-clients");
export const can_view_clients = checkPermissions("view-clients");
export const can_edit_clients = checkPermissions("edit-clients");
// <---- clients  permission ---------->
// <---- payements  permission ---------->
export const can_add_payments = checkPermissions("add-payments");
export const can_view_payments = checkPermissions("view-payments");
export const can_delete_payments = checkPermissions("delete-payments");
export const can_edit_payments = checkPermissions("edit-payments");
// <---- payements  permission ---------->
// <---- roles permission ---------->
export const can_add_roles = checkPermissions("add-roles");
export const can_edit_roles = checkPermissions("edit-roles");
export const can_delete_roles = checkPermissions("delete-roles");
export const can_view_roles = checkPermissions("view-roles");
// <----roles  permission ---------->
// <----  permission ---------->
export const can_add_permissions = checkPermissions("add-permissions");
export const can_view_permission = checkPermissions("view-permissions");
export const can_edit_permission = checkPermissions("edit-permissions");
export const can_delete_permission = checkPermissions("delete-permissions");
// <----  permission ---------->
// <---- Users permission ---------->
export const can_add_users = checkPermissions("add-users");
export const can_view_users = checkPermissions("view-users");
export const can_edit_users = checkPermissions("edit-users");
export const can_delete_users = checkPermissions("delete-users");
// <---- Users permission ---------->

// <---- maintenance permission ---------->
export const can_add_maintenance = checkPermissions("create-maintenance");
export const can_view_maintenance = checkPermissions("view-maintenance");
export const can_edit_maintenance = checkPermissions("edit-maintenance");
export const can_delete_maintenance = checkPermissions("delete-maintenance");
// <---- maintenance permission ---------->

// <---- maintenance Type  permission ---------->
export const can_add_maintenance_type = checkPermissions("create-maintenance-type")
export const can_delete_maintenance_type = checkPermissions("delete-maintenance-type");
export const can_view_maintenance_type = checkPermissions("view-maintenance-type");
export const can_edit_maintenance_type = checkPermissions("edit-maintenance-type");
// <---- maintenance Type  permission ---------->

// <---- notifications permission ---------->
export const can_view_notifications = checkPermissions("view-notifications");
export const can_delete_notifications = checkPermissions("delete-notifications");
// <---- notifications permission ---------->







