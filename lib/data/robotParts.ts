export interface RobotPart {
  id: string;
  name: string;
  description: string;
}

/**
 * Components of the interactive robot model on the home page. The model and
 * these descriptions are placeholders until the real CAD render is provided.
 */
export const robotParts: RobotPart[] = [
  {
    id: "chassis",
    name: "Chassis",
    description:
      "The structural frame everything else bolts to. Rigid rails keep the drivetrain square and protect the electronics through hard contact.",
  },
  {
    id: "drivetrain",
    name: "Drivetrain Wheels",
    description:
      "Four independently driven wheels that move the robot around the field, letting it drive forward, back, and turn precisely.",
  },
  {
    id: "motors",
    name: "Drive Motors",
    description:
      "One motor per wheel. They convert electrical power from the battery into the torque that propels the robot.",
  },
  {
    id: "battery",
    name: "Battery",
    description:
      "The 12V battery that powers the motors, servos, and control system for the whole match.",
  },
  {
    id: "controller",
    name: "Control Hub",
    description:
      "The robot's brain. It runs our code, reads sensors, and sends commands to every motor and servo.",
  },
  {
    id: "intake",
    name: "Intake",
    description:
      "Spinning rollers at the front that pull game elements into the robot quickly and reliably.",
  },
  {
    id: "tray",
    name: "Scoring Tray",
    description:
      "A sloped tray that carries collected game elements from the intake up toward the lift for scoring.",
  },
  {
    id: "lift",
    name: "Linear Lift",
    description:
      "Vertical slides with a carriage that extend upward to place game elements at height.",
  },
  {
    id: "camera",
    name: "Vision Camera",
    description:
      "A camera on a mast that lets the robot see field markers and game elements for autonomous driving.",
  },
];
