import Option from "./Option";

export default function PriceOption() {
  const priceOption = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Open gym hours only",
        "1 free fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 40,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room and shower access",
        "Unlimited open gym hours",
        "2 free fitness assessments",
        "Access to group classes",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 60,
      currency: "USD",
      features: [
        "All Standard Plan benefits",
        "Personal training sessions (2 per month)",
        "Access to sauna and steam room",
        "Priority booking for classes",
        "Free nutritional guidance session",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Best price In the town</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-0">
        {priceOption.map((option) => (
          <Option key={option.id} option={option}></Option>
        ))}
      </div>
    </div>
  );
}
