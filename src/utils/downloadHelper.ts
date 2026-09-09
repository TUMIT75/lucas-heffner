// Helper utility for generating and downloading documents and checklists client-side

export function downloadTextFile(filename: string, content: string, mimeType = 'text/plain;charset=utf-8'): void {
  try {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('File download failed:', err);
  }
}

export const HABIT_MATRIX_CONTENT = `================================================================================
CUT THE CRAP: 180-DAY DAILY ADHERENCE & ENERGY BALANCE MATRIX
Author: Lucas Heffner | Up Armor Publishing (c)
================================================================================

PILLAR 1: CALORIC TRUTH & ENERGY BALANCE
--------------------------------------------------------------------------------
[ ] Morning Weigh-in (fasted, post-urination): _______ lbs
[ ] Daily Calorie Target: _______ kcal
[ ] Calorie Burn / Intake Logged in Food App (100% adherence): [YES / NO]
Engineering Rule: The deficit is math; the scale is noisy. Focus on 14-day rolling averages.

PILLAR 2: PROTEIN FLOOR & METABOLIC SHIELD
--------------------------------------------------------------------------------
[ ] Target Protein Floor: _______ grams (Target: 0.85g - 1.0g per lb goal weight)
[ ] Meal 1 Protein: ____g  |  Meal 2 Protein: ____g  |  Meal 3 Protein: ____g
[ ] Protein Floor Achieved: [PASS / FAIL]

PILLAR 3: DAILY STEP & ACTIVITY BASELINE
--------------------------------------------------------------------------------
[ ] Daily Baseline Step Goal: 8,000 - 10,000 steps
[ ] Actual Steps Recorded: _______ steps
[ ] Progressive Overload Lift Completed: [PUSH / PULL / LEGS / REST]

PILLAR 4: RECOVERY & SLEEP HYGIENE
--------------------------------------------------------------------------------
[ ] Time in Bed: _______ hrs (Target: 7.5 - 8.5 hrs)
[ ] Sleep Room Dark & Cool (<68 deg F): [YES / NO]
[ ] Hydration (Half bodyweight in oz): _______ oz

DAILY NOTES & FRICTION AUDIT:
--------------------------------------------------------------------------------
Where did friction occur today?
What system adjustment will prevent this friction tomorrow?
`;

export const STUDY_GUIDE_CONTENT = `================================================================================
CUT THE CRAP: 6-WEEK SQUAD & BOOK CLUB SYLLABUS
Author: Lucas Heffner | Up Armor Publishing
================================================================================

WEEK 1: THE NOISE & THE METABOLIC TRUTH
- Read: Chapters 1 - 3
- Squad Discussion: What diet myths have you previously bought into?
- Practical Exercise: Caloric baseline audit & pantry friction purge.

WEEK 2: THE FOUR PILLARS FOUNDATION
- Read: Chapters 4 - 7
- Squad Discussion: Calculating your non-negotiable protein floor.
- Practical Exercise: 7-day precise food weighing without guessing.

WEEK 3: PHYSICAL RESILIENCE & THE MINIMUM EFFECTIVE DOSE
- Read: Chapters 8 - 10
- Squad Discussion: Cardio vs. Resistance Training for fat preservation.
- Practical Exercise: Progressive overload workout template execution.

WEEK 4: BEHAVIORAL ARCHITECTURE & ENVIRONMENT DESIGN
- Read: Chapters 11 - 13
- Squad Discussion: Identifying your high-friction trigger moments.
- Practical Exercise: Kitchen and workspace environmental re-engineering.

WEEK 5: THE CLICK MOMENT & PEER ACCOUNTABILITY
- Read: Chapters 14 - 16
- Squad Discussion: Sharing your Click Moment with your Battle Buddy.
- Practical Exercise: Establishing weekly accountability check-in protocols.

WEEK 6: PERMANENT FREEDOM & PREVENTING DRIFT
- Read: Chapters 17 - 18
- Squad Discussion: Maintaining the 10-year standard without neurosis.
- Practical Exercise: Finalizing your permanent personal SOP (Standard Operating Procedure).
`;
