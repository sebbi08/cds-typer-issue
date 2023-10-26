import { Service } from "@sap/cds/apis/services";
import cds from "@sap/cds";
import { MyEnum } from "#cds-models/stuff";

module.exports = cds.service.impl(async function (srv: Service) {
  console.dir(MyEnum.MyEnumA)
  console.dir(MyEnum.MyEnumB)
  //@ts-ignore
  const a = cds.model.definitions['stuff.MyEnum'].enum
  debugger;
});
