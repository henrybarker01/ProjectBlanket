import {CalibrationModel} from "./calibration";

export class EquipmentModel {
  id: string;
  name: string;
  description: string;
  model: string;
  serialNumber: string;
  initialCost: number;
  isCalibrated: boolean;
  calibrationList: CalibrationModel[];
}
