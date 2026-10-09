import { FaqItem, ProcessStep, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Star City Mobile Repairing',
  tagline: 'Professional Mobile Repair in Quetta',
  subheading:
    'Reliable mobile phone repair services in Quetta for customers looking to restore, maintain, and troubleshoot their devices.',
  address: 'Malak Plaza, Abdul Sattar Shah Rd, Quetta, 87300, Pakistan',
  street: 'Malak Plaza, Abdul Sattar Shah Rd',
  city: 'Quetta, 87300, Pakistan',
  plusCode: '52R8+Q4 Quetta, Pakistan',
  phone: '+92 345 8919199',
  phoneTel: 'tel:+923458919199',
  phoneDisplay: '+92 345 8919199',
  hours: 'Open · Closes 11 PM',
  hoursShort: 'Open until 11 PM',
  whatsappUrl:
    'https://wa.me/923458919199?text=Hi%20Star%20City%20Mobile%20Repairing%2C%20I%20want%20to%20inquire%20about%20a%20mobile%20repair.',
  whatsappBase: 'https://wa.me/923458919199',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'diagnosis',
    title: 'Comprehensive Device Diagnosis',
    shortDesc:
      'Systematic testing and hardware examination to isolate unknown faults, power drains, or unbootable devices.',
    icon: 'SearchCheck',
    category: 'diagnostic',
    symptoms: [
      'Phone suddenly shuts down or refuses to turn on',
      'Unexplained battery depletion or device heating up',
      'Intermittent restarts or freezing on logo',
      'Multiple issues occurring simultaneously after a drop',
      'Unclear whether the issue is hardware or software related',
    ],
    assessmentPoints: [
      'Current draw and ammeter power-curve analysis',
      'Microscopic inspection of connectors and board traces',
      'Battery state and voltage stability evaluation',
      'Subsystem isolation to identify faulty modules',
      'Direct discussion with the customer regarding options',
    ],
    description:
      'When your smartphone malfunctions without an obvious cause, Star City Mobile Repairing conducts systematic diagnostic testing. Rather than guessing, our technicians isolate circuit behavior, power intake, and peripheral modules to identify the specific root cause before any repair is initiated.',
  },
  {
    id: 'screen-repair',
    title: 'Mobile Screen Repair & Assessment',
    shortDesc:
      'Evaluation and replacement assistance for cracked glass, unresponsive touch digitizers, lines on display, or black screens.',
    icon: 'Smartphone',
    category: 'display',
    symptoms: [
      'Cracked or shattered outer glass',
      'Black display with audio or vibrations still active',
      'Flickering screen, green or colored vertical lines',
      'Ghost touching or areas of screen not responding to touch',
      'Discolored patches or ink-like bleed spots on panel',
    ],
    assessmentPoints: [
      'Inspection of frame integrity to ensure secure fitting',
      'Testing touch responsiveness across the entire grid',
      'Display connector and backlight circuit verification',
      'Confirmation of proximity sensor and front camera clearance',
    ],
    description:
      'Screen damage can range from superficial glass cracks to complete OLED/LCD panel failure. Star City Mobile Repairing inspects your mobile device to verify whether only the glass, the digitizer layer, or the entire display assembly requires attention, ensuring precise fitment.',
  },
  {
    id: 'battery-replacement',
    title: 'Battery Inspection & Replacement',
    shortDesc:
      'Service assistance for rapid battery drainage, swollen cells, spontaneous restarts, and degraded charge retention.',
    icon: 'BatteryMedium',
    category: 'power',
    symptoms: [
      'Battery drops rapidly from 50% to 0% in minutes',
      'Phone only powers on when tethered to a wall charger',
      'Device back cover lifting or bulging (warning: swollen battery)',
      'Phone gets hot to the touch during normal standby usage',
      'Device reboots randomly under moderate task loads',
    ],
    assessmentPoints: [
      'Cell voltage measurement and charging cycle assessment',
      'Thermal check during power intake',
      'Physical inspection for gas expansion or swelling',
      'Power management IC verification to rule out motherboard drain',
    ],
    warningNote:
      'Never press down or attempt to puncture a swollen mobile battery. A swollen battery is a potential fire hazard. Bring the device in for immediate professional inspection.',
    description:
      'Rechargeable lithium-ion batteries naturally lose capacity over charge cycles. If your smartphone shuts down prematurely or exhibits signs of physical bulging, Star City Mobile Repairing provides testing and replacement assistance suited to your phone model.',
  },
  {
    id: 'charging-port-repair',
    title: 'Charging Port & Power Jack Repair',
    shortDesc:
      'Troubleshooting for loose charging ports, intermittent cable connections, slow charging speeds, or total power failure.',
    icon: 'Zap',
    category: 'power',
    symptoms: [
      'Charging cable must be held at an angle to charge',
      'Cable falls out loosely from the charging port',
      'Phone displays "moisture detected" falsely or refuses current',
      'Extremely slow charging speed despite using proper adapter',
      'No charging indicator icon appears when plugged in',
    ],
    assessmentPoints: [
      'Debris and pocket lint removal with non-conductive tools',
      'Inspection of USB-C / Lightning / Micro-USB connector pins',
      'Sub-board solder joints and ribbon flex cable continuity',
      'Power intake ammeter reading to verify steady current flow',
    ],
    description:
      'Charging troubles are frequently caused by compacted debris, bent contact pins, or damaged sub-board connections. Star City Mobile Repairing examines the charging port assembly to determine whether a precision clean or component replacement is needed.',
  },
  {
    id: 'software-system',
    title: 'Software & System Services',
    shortDesc:
      'Legitimate troubleshooting for boot loops, system crashes, failed OS updates, persistent errors, and device recovery.',
    icon: 'Cpu',
    category: 'software',
    symptoms: [
      'Phone stuck continuously on boot logo (boot loop)',
      'Persistent system UI stopped or Google Play service crashes',
      'System update halted halfway leaving phone unresponsive',
      'Frequent unprovoked freezing during basic phone operations',
      'Memory / storage corruption causing system instability',
    ],
    assessmentPoints: [
      'Software partition and firmware integrity evaluation',
      'Recovery mode and bootloader state check',
      'System cache wipe and stability diagnostics',
      'Official stock firmware re-flashing where applicable',
    ],
    warningNote:
      'We provide legitimate troubleshooting and device recovery only. We do not engage in unauthorized IMEI alterations or illegal bypasses.',
    description:
      'When your smartphone encounters operating system faults, crashes during updates, or enters continuous reboot loops, Star City Mobile Repairing assists with clean system recovery, cache clearing, and firmware troubleshooting.',
  },
  {
    id: 'water-damage',
    title: 'Water & Liquid Damage Assessment',
    shortDesc:
      'Emergency examination, ultrasonic cleaning, and corrosion treatment for devices exposed to water, rain, or liquids.',
    icon: 'Droplets',
    category: 'hardware',
    symptoms: [
      'Phone dropped into water, tea, or exposed to heavy rain',
      'Device turned off abruptly following liquid contact',
      'Distorted audio, crackling speaker, or muffled microphone',
      'Fog, condensation, or water droplets visible behind camera lenses',
      'Overheating or error prompts when connecting charger',
    ],
    assessmentPoints: [
      'Immediate teardown and battery disconnect to stop short circuits',
      'Microscopic inspection of liquid contact indicators (LCIs) and circuit traces',
      'Ultrasonic bath treatment to eliminate mineral corrosion deposits',
      'Component-by-component resistance testing before power-up',
    ],
    warningNote:
      'Do not put liquid-damaged phones in rice, and do not connect them to a charger. Electricity combined with moisture accelerates permanent electrolysis corrosion. Seek professional inspection promptly.',
    description:
      'Liquid exposure triggers rapid chemical corrosion across delicate printed circuit boards. Star City Mobile Repairing provides disassembly, drying, ultrasonic cleaning, and circuit assessment to help inspect whether components can be stabilized.',
  },
  {
    id: 'other-repairs',
    title: 'Hardware & Peripheral Repairs',
    shortDesc:
      'Repair support for faulty speakers, earpieces, microphones, camera modules, broken buttons, and housing frames.',
    icon: 'Wrench',
    category: 'hardware',
    symptoms: [
      'Callers cannot hear you clearly (microphone fault)',
      'Low, muffled, or crackling speaker volume during calls',
      'Camera fails to focus, shakes violently, or shows black screen',
      'Stuck or non-responsive power / volume buttons',
      'Weak Wi-Fi or cellular signal dropouts',
    ],
    assessmentPoints: [
      'Acoustic mesh and microphone membrane testing',
      'Optical image stabilization (OIS) and camera lens verification',
      'Physical tactile button switch continuity testing',
      'Internal antenna flex cables and grounding checks',
    ],
    description:
      'Modern smartphones comprise dozens of interdependent micro-modules. Star City Mobile Repairing troubleshoots and provides assistance for audio peripherals, camera modules, physical button switches, and internal hardware faults.',
  },
];

export const REPAIR_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell Us Your Problem',
    subtitle: 'Direct Contact or Walk-In',
    description:
      'Reach out to Star City Mobile Repairing via WhatsApp, telephone (+92 345 8919199), or visit our shop at Malak Plaza on Abdul Sattar Shah Road in Quetta. Describe the exact symptoms you are experiencing with your mobile phone.',
    keyDetails: [
      'State your device model and brand',
      'Describe when the problem first started',
      'Mention any incidents (drop, liquid, charger issue)',
    ],
  },
  {
    step: '02',
    title: 'Device Assessment',
    subtitle: 'Systematic Physical & Electronic Check',
    description:
      'Our technician inspects your device carefully. We examine physical housings, run electrical power-draw checks, verify display responsiveness, and isolate suspected hardware or software components.',
    keyDetails: [
      'Bench-level multimeter & power inspection',
      'Physical damage and internal moisture check',
      'Hardware vs. software root-cause isolation',
    ],
  },
  {
    step: '03',
    title: 'Repair Recommendation',
    subtitle: 'Clear Findings & Explanation',
    description:
      'We communicate our diagnostic findings directly with you. We explain what parts or procedures are required, verify feasibility, and discuss repair options openly before any work begins.',
    keyDetails: [
      'Transparent fault explanation with no hidden surprises',
      'Clear discussion on available replacement options',
      'Customer authorization requested before starting',
    ],
  },
  {
    step: '04',
    title: 'Repair / Service',
    subtitle: 'Precision Technical Execution',
    description:
      'Once authorized, the device undergoes careful repair on our bench using dedicated precision electronics screwdrivers, heating mats, tweezers, and diagnostic testing equipment.',
    keyDetails: [
      'Anti-static workbench protocols',
      'Careful handling of delicate internal ribbon cables',
      'Clean re-assembly and proper screw indexing',
    ],
  },
  {
    step: '05',
    title: 'Testing & Handover',
    subtitle: 'Functional Verification Before Delivery',
    description:
      'Before handing the phone back to you, we test the repaired functionality along with core operations (touch, display, charging, sound, calling) to confirm the device is operating properly.',
    keyDetails: [
      'Comprehensive post-repair hardware check',
      'Verification with customer upon collection',
      'Care recommendations for long-term reliability',
    ],
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'general',
    question: 'Where is Star City Mobile Repairing located in Quetta?',
    answer:
      'Star City Mobile Repairing is located at Malak Plaza, Abdul Sattar Shah Rd, Quetta, 87300, Pakistan (Plus Code reference: 52R8+Q4 Quetta). You can easily locate us in the plaza or contact us via phone/WhatsApp for directions.',
  },
  {
    category: 'general',
    question: 'What are your business hours?',
    answer:
      'We are open throughout the day and close at 11:00 PM at night. This provides ample time for customers to bring in or collect their mobile devices after work or evening routines.',
  },
  {
    category: 'contact',
    question: 'Can I ask about a repair before visiting the shop?',
    answer:
      'Yes, absolutely. You are welcome to call us directly at +92 345 8919199 or message us on WhatsApp with your phone model and fault description. We will let you know whether you should bring the device in for inspection.',
  },
  {
    category: 'contact',
    question: 'Can I contact you on WhatsApp?',
    answer:
      'Yes. Our WhatsApp number is +92 345 8919199. You can send text messages or photos showing the damage (such as cracked glass or screen display errors) to help us understand your inquiry.',
  },
  {
    category: 'services',
    question: 'Which mobile problems can I bring for inspection?',
    answer:
      'You can bring devices with cracked or black screens, rapid battery depletion, devices not charging or with loose ports, speaker or microphone issues, camera faults, boot loops, software crashes, liquid exposure, or phones that fail to power on.',
  },
  {
    category: 'services',
    question: 'Can you check a phone that is not charging at all?',
    answer:
      'Yes. When a phone does not charge, the fault could stem from compacted debris inside the port, a worn USB connector, a degraded battery, or a charging IC issue on the mainboard. We inspect the device to determine the exact reason.',
  },
  {
    category: 'services',
    question: 'What should I do if my phone gets wet?',
    answer:
      'Immediately power off the phone if it is still on. Do NOT plug it into a charger, as running electric current through wet circuitry causes severe short circuits and rapid corrosion. Bring the phone in for professional disassembly and drying as soon as possible.',
  },
  {
    category: 'services',
    question: 'Do you carry out assessments for all major phone brands?',
    answer:
      'Yes. We inspect and repair common mobile phone brands used in Pakistan, including Samsung, Apple iPhone, Xiaomi / Redmi, Infinix, Tecno, Oppo, Vivo, Realme, and others.',
  },
  {
    category: 'services',
    question: 'Do you provide illegal unlocking or IMEI modifications?',
    answer:
      'No. Star City Mobile Repairing strictly provides legitimate repair and troubleshooting services. We do not participate in unauthorized IMEI alterations, stolen device bypasses, or unlawful security circumvention.',
  },
];
