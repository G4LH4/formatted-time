import { checkInstance, checkCamp } from "../../components/handleParameters.js";

export const hrToMn = (hr) => {
  checkInstance(hr, Number);
  checkCamp(hr);

  return hr * 60;
};

export const hrToMs = (hr) => {
  checkInstance(hr, Number);
  checkCamp(hr);

  return hr * 3600000;
};

export const hrToSc = (hr) => {
  checkCamp(hr);

  checkInstance(hr, Number);

  return hr * 3600;
};
