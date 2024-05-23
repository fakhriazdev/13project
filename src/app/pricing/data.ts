export interface IPricing {
  title: string;
  description: string;
  link: string;
  listFeature: string[];
}

export const pricings: IPricing[] = [
  {
    title: "STUDENT",
    description:
      "Is simply dummy text of the printing and typesetting industry",
    link: "https://stripe.com",
    listFeature: ["Mobile / Web Apps", "5 Revision", "Payment By project"],
  },
  {
    title: "SMALL BUSINESS",
    description: "Is simply dummy text of the printing and typsetting Industry",
    link: "https://netflix.com",
    listFeature: [
      "Limited Request",
      "15 Revision",
      "Payment By Project",
      "2 - 3 Engineer",
      "1 Server",
      "1 Domain",
      "Continues Maintenent",
    ],
  },
  {
    title: "STARTUP",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    listFeature: ["Mobile / Web Apps", "5 Revision", "Payment By project"],
  },
  {
    title: "ENTERPRICE",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    listFeature: ["Mobile / Web Apps", "5 Revision", "Payment By project"],
  },
];
