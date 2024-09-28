import { Message } from "./message";

const emergencies = [
  {
    emergency: "Flood",
    location: "Iloilo City",
    status: "Ongoing",
    description:
      "Continuous heavy rainfall over the past 48 hours has caused the Iloilo River to overflow, leading to widespread flooding in various parts of the city. Low-lying areas, particularly near the riverbanks, are submerged under several feet of water. Many residents have been forced to evacuate their homes as authorities scramble to provide relief efforts. Transportation has come to a halt, with several major roads rendered impassable. Emergency services are actively rescuing stranded families and advising people to move to higher ground immediately.",
    evacuationCenter: "Iloilo National High School",
  },
  {
    emergency: "Earthquake",
    location: "San Miguel, Iloilo",
    status: "Resolved",
    description:
      "A powerful 6.2 magnitude earthquake shook San Miguel, causing significant structural damage throughout the municipality. The quake was felt across a wide area, with several buildings collapsing or sustaining cracks. Fortunately, local emergency teams responded quickly, conducting search and rescue operations to save trapped individuals. While most injuries were minor, authorities are assessing the total damage to infrastructure. Aftershocks are still being monitored, and residents are advised to remain vigilant in case of further seismic activity.",
    evacuationCenter: "San Miguel Sports Complex",
  },
  {
    emergency: "Typhoon",
    location: "Oton, Iloilo",
    status: "Ongoing",
    description:
      "Typhoon 'Agaton' made landfall in Oton with winds exceeding 150 kph, causing widespread destruction to homes, schools, and public infrastructure. The violent winds have uprooted trees, toppled power lines, and left large portions of the town without electricity. Several neighborhoods are experiencing flash floods due to the heavy rainfall accompanying the typhoon. Emergency response teams are working around the clock to rescue stranded individuals and distribute food and medical supplies to those in need. Many residents have been evacuated to safety as the storm continues to batter the region.",
    evacuationCenter: "Oton Community Hall",
  },
  {
    emergency: "Landslide",
    location: "Alimodian, Iloilo",
    status: "Ongoing",
    description:
      "Days of torrential rain in the mountainous areas of Alimodian have triggered a large landslide, burying several houses in its path. The disaster struck without warning, leaving many residents trapped under debris and mud. Rescue operations are being conducted by local authorities and volunteers, but the situation remains precarious as the unstable terrain continues to pose a threat of further landslides. Families have been evacuated from the affected area, and efforts are focused on finding survivors and providing medical care to the injured.",
    evacuationCenter: "Alimodian Elementary School",
  },
  {
    emergency: "Fire",
    location: "Jaro, Iloilo City",
    status: "Resolved",
    description:
      "A devastating fire broke out in a densely populated residential neighborhood in Jaro, quickly spreading through a row of wooden houses. The blaze, fueled by strong winds, consumed dozens of homes, leaving many families homeless. Firefighters from multiple districts were dispatched to contain the inferno, which took several hours to bring under control. Fortunately, no casualties were reported, but the fire caused significant damage to property. Local authorities are now assisting displaced residents and assessing the cause of the fire, which is believed to have started from faulty electrical wiring.",
    evacuationCenter: "Jaro Plaza Covered Gym",
  },
];

export function Hero() {
  return (
    <>
      <div className="mx-auto gap-6 text-center">
        <div className="my-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            iCare
          </h1>
          <p className="text-balance text-2xl text-muted-foreground">
            your immediate response.
          </p>
        </div>
      </div>
      {emergencies.map((emergency, index) => (
        <Message
          key={index}
          emergency={emergency.emergency}
          location={emergency.location}
          status={emergency.status}
          description={emergency.description}
          evacuationCenter={emergency.evacuationCenter}
        />
      ))}
    </>
  );
}
