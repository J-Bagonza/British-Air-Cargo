export const validTrackingNumbers = [
  "EA390VAWD",
  "PH0SPA3022916"
];

export const trackingDetails = {
  "EA390VAWD": {
    confirmationNumber: "PH0SPA3022916",
    username: "EA390VAWD",
    regNumber: "37400BLK002",
    operator: "Global AirCargo Express",
    departure: {
      date: "Wed, Jun 4, 2025",
      time: "7:00 PM",
      location: "LONDON",
      code: "LHR",
      country: "UK"
    },
    arrival: {
      date: "Thu, Jun 5, 2025",
      time: "9:30 AM",
      location: "KENYA EAST AFRICA",
      code: "MBA",
      country: "KENYA EAST AFRICA"
    },
    sender: {
      name: "Anna Lusia",
      phone: "+447480680242"
    },
    receiver: {
      name: "MOLAHLOA WALTER MAHONONO",
      phone: "+27739120935"
    },
    items: "phone laptop accessories",
    status: {
      departed: true,
      inTransit: true,
      arrived: true
    },
    estimatedDelivery: "Thu, Jun 5, 2025",
    lastUpdate: "Thu, Jun 5, 2025"
  }
};

export const allTrackingDetails = validTrackingNumbers.reduce((acc, number) => {
  acc[number] = {
    ...trackingDetails["EA390VAWD"],
    username: number,
    confirmationNumber: number === "EA390VAWD" ? "PH0SPA3022916" : number,
    status: {
      departed: true,
      inTransit: true,
      arrived: true
    },
    estimatedDelivery: "Thu, Jun 5, 2025",
    lastUpdate: "Thu, Jun 5, 2025"
  };
  return acc;
}, {});
