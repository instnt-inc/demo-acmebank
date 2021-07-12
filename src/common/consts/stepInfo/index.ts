const stepsInputs = [
  [
    {
      id: 'firstName',
      label: 'Given Name',
      autocomplete: "given-name"
    },
    {
      id: 'surName',
      label: 'Last Name',
      autocomplete: "family-name"
    }
  ], 
  [
    {
      id: 'email',
      type: 'email',
      label: `What's your email address?`,
      autocomplete: "email",
      validator: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    {
      id: 'mobileNumber',
      type: 'number',
      label: `What's your phone number?`,
      autocomplete: "tel-national",
      validator: /([1-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/,
      isPhone: true,
    }
  ],
  [
    {
      id: 'code',
      type: 'number',
      label: `Verification Code`,
    }
  ],
  [
    {
      id: 'country',
      label: 'Country:',
      options: ['Canada', 'United States'],
      default: 'United States',
      isSelect: true,
    },
    {
      id: 'physicalAddress',
      label: `Street Address`,
    },
    {
      id: 'city',
      label: `City`,
    },
    {
      id: 'state',
      label: `State/Province`,
    }, 
    {
      id: 'zip',
      label: `Zip/Postal Code`,
    }
  ],
];

const stepsHeaders = [
  {
    header: 'Hello!',
    paragraph: 'Tell us your name:'
  },
  {
    paragraph: 'How to contact you?',
  },
  {
    header: `Phone number verification`,
    paragraph: 'The verification code was sent to the number '
  },
  {
    paragraph: 'Where do you live?',
  }
];

const steps = ['Hello!', 'How to contact you?', 'Phone number verification', 'Where do you live?'];

 
export { steps, stepsHeaders, stepsInputs }; 
