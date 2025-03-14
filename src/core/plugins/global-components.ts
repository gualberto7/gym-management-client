import type { App } from "vue";

// Global Common Components
import Card from "@/core/components/Card.vue";
import Form from "../components/Form.vue";
import FieldContainer from "../components/FieldContainer.vue";
import Label from "../components/Label.vue";
import TextField from "../components/TextField.vue";
import Button from "../components/Button.vue";
import Alert from "../components/Alert.vue";
import Table from "../components/Table.vue";
import Avatar from "../components/Avatar.vue";
import Badge from "../components/Badge.vue";
import PageHeader from "../components/PageHeader.vue";
import CreateMember from "@/areas/member/components/CreateMember.vue";
import SelectInput from "../components/SelectInput.vue";

// Global Modal Components
import SubscriptionInfoModal from "@/areas/subscription/components/SubscriptionInfoModal.vue";
import ShowMembershipModal from "@/areas/membership/components/ShowMembershipModal.vue";
import MembershipFormModal from "@/areas/membership/components/MembershipFormModal.vue";

export function registerGlobalComponents(app: App) {
  app.component("Card", Card);
  app.component("Form", Form);
  app.component("FieldContainer", FieldContainer);
  app.component("Label", Label);
  app.component("TextField", TextField);
  app.component("SelectInput", SelectInput);
  app.component("Button", Button);
  app.component("Alert", Alert);
  app.component("Table", Table);
  app.component("Avatar", Avatar);
  app.component("Badge", Badge);
  app.component("PageHeader", PageHeader);

  // Modals
  app.component("CreateMember", CreateMember);
  app.component("SubscriptionInfoModal", SubscriptionInfoModal);
  app.component("ShowMembershipModal", ShowMembershipModal);
  app.component("MembershipFormModal", MembershipFormModal);
}
