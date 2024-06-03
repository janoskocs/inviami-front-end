export interface EventDetailsType {
  age: number;
  description: string;
  eventDateTime: string;
  eventName: string;
  invitationTemplate: string;
  link: string;
  location: string;
  occasionTitle: string;
}

export type EventComponentType = React.ComponentType<{
  event: EventDetailsType | string;
}>;
