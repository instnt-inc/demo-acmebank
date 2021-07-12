interface SignupData {
  firstName: string;
  surName: string;
  email: string;
  mobileNumber: string;
  country: Country;
  physicalAddress: string;
  city: string;
  state: string;
  zip: string;
}
 
enum Country {
  CA = 'Canada',
  US = "United States",
}

export { Country };
export type { SignupData };
