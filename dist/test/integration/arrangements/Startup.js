sap.ui.define(["sap/ui/test/Opa5"],function(t){"use strict";return t.extend("sample.UI5_Sample.test.integration.arrangements.Startup",{iStartMyApp:function(t){var a=t||{};a.delay=a.delay||50;this.iStartMyUIComponent({componentConfig:{name:"sample.UI5_Sample",async:true},hash:a.hash,autoWait:a.autoWait})}})});