import type { CreateMember } from "../interfaces/Member";

class MemberModel {
  name: string;
  ci: string;
  email: string;
  phone: string;

  constructor(createMember: CreateMember = {} as CreateMember) {
    this.name = createMember.name || "";
    this.ci = createMember.ci || "";
    this.email = createMember.email || "";
    this.phone = createMember.phone || "";
  }
}

export default MemberModel;
