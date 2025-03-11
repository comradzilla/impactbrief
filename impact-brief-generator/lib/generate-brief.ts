// This is a mock implementation that would be replaced with actual AI processing
// In a real app, this would call an API endpoint that uses AI to generate the brief

export async function generateBrief(meetingNotes: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Mock response data
  return {
    headline: "Strategic Initiative for Revenue Growth",
    champion: "John Smith",
    dealPlayers: "Sales Team, IT Department",
    headlineContent:
      "Due to market consolidation, we must implement an integrated platform by Q3 to prevent revenue loss and secure competitive advantage.",

    challenge1:
      "Every quarter, 500+ sales reps face pipeline visibility issues, costing us $2M in lost opportunities. Without action by Q3, this could double.",
    challenge2:
      "Despite previous attempts, data silos persist, blocking cross-selling and draining 15 hours per week in manual reporting.",
    whyItMatters: "This undermines our company-wide goal of 30% YoY growth.",

    solution: "Streamline sales processes with an integrated CRM platform.",
    proof: "Tested via pilot program with top performers, delivering 22% increase in win rates.",
    requirements: "Success hinges on executive buy-in and IT resources for Q2 implementation.",
    resourcing: "Shift enabled by 2-person implementation team over 6 weeks.",
    vendorTransition: "After aligning on this approach, our company exceeds all criteria to execute.",

    targetDate: "Q4 2025",
    kpi1Name: "Win Rate",
    kpi1Current: "22%",
    kpi1Target: "35% (+59%)",
    kpi2Name: "Deal Velocity",
    kpi2Current: "45 days",
    kpi2Target: "30 days (-33%)",
    kpi3Name: "Revenue per Rep",
    kpi3Current: "$1.2M",
    kpi3Target: "$1.8M (+50%)",
    dailyImpact: "Sales reps save 2 hours/day on administrative tasks; customer satisfaction scores improve by 15%.",

    people: "Sales operations and IT teams commit 120 hours total.",
    time: "Kickoff by April 15, initial results by June 30.",
    scenarios: "Base case: 2 dedicated staff; Accelerated: 4 staff for 30-day implementation.",

    better1: "Tighter, with a cause-effect hook that grabs attention.",
    better2:
      'Streamlined problem statements with a punchy "Why it matters" tie-in to company goals—keeps it strategic.',
    better3: "Broken into digestible chunks (solution, proof, requirements), with a smoother vendor segue.",
    better4: 'Table format stays, but added a "Daily Impact" line for emotional resonance alongside exec metrics.',
    better5: "Clarified as a commitment, not just a cost, with optional scenarios for flexibility.",
    better6: "Shorter sentences, active voice, and a mix of bold/italics for scannability—execs skim, so this helps.",
  }
}

