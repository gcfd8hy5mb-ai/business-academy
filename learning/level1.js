/* Original authored coursework; source links are reading assignments, not reproduced material. */
Object.assign(window.BAContent,{
  "course-01": {
    "status": "authored introductory sequence",
    "description": "Analyze a diversified corporation as a system of customers, activities, cash flows and governance. All company data below are fictional and in millions unless stated otherwise.",
    "outcomes": [
      "Distinguish value creation from value capture.",
      "Map a corporate business model and its economic dependencies.",
      "Separate executive authority, board oversight and evidence-based control."
    ],
    "modules": [
      {
        "id": "course-01-m1",
        "title": "Value and business models",
        "lessons": [
          {
            "id": "c01-value",
            "title": "Who receives value and who pays?",
            "minutes": 30,
            "body": [
              "A business model explains a repeatable exchange: a customer experiences a problem, the company offers a solution, and someone pays enough to sustain the activities required. Customer, user and payer may be different parties. An enterprise software user may be an employee while procurement controls the purchase and a division funds it. Analyze all three roles before assuming adoption produces revenue.",
              "Value creation is the benefit delivered relative to the next-best alternative. Value capture is the portion retained by the company through prices and contractual terms after paying for inputs. A product can create great social or customer value while capturing little profit because competition, substitutes or powerful suppliers absorb the surplus. Revenue growth alone does not prove an advantage.",
              "Map customer segments, buyer needs, revenue mechanisms, essential activities, assets, partners and cost drivers. For a multinational manufacturer, distinguish equipment sales from maintenance subscriptions and financing. The streams differ in recognition timing, capital requirements and risk. A consolidated total can hide deterioration in one segment.",
              "An analytical claim must specify evidence and a falsification condition. “Recurring revenue is resilient” is a hypothesis; retention cohorts, renewal prices, contractual exit rights and customer concentration test it. Build a model that could be disproved rather than a promotional description."
            ],
            "example": "Atlas Systems sells equipment for 600 and annual service for 200. Equipment costs 420 and service delivery costs 80. Segment gross profits are 180 and 120. Service is 25% of revenue but 40% of gross profit. That does not establish its operating profit because shared overhead has not been allocated.",
            "transfer": "Compare an advertising-funded platform and an enterprise subscription. Identify payer, user, renewal risk and the evidence needed to compare cash generation.",
            "tutor": {
              "question": "Why can the smallest revenue segment be strategically important?",
              "hints": [
                "Separate revenue share from gross-profit share.",
                "Compute each segment revenue minus direct cost, then identify shared costs."
              ],
              "response": "A small segment may fund disproportionate gross profit or reinforce retention, but overhead, capital and customer dependence may change the decision."
            }
          }
        ]
      },
      {
        "id": "course-01-m2",
        "title": "Corporate structure and accountability",
        "lessons": [
          {
            "id": "c01-govern",
            "title": "Ownership, management and control",
            "minutes": 30,
            "body": [
              "Shareholders provide equity and ordinarily elect directors. The board oversees executive management, strategy, risk and capital decisions under the applicable legal framework. Executives run operations within delegated authority. Ownership, board membership and daily management are distinct roles; exact duties depend on jurisdiction and organizational form.",
              "Agency problems arise when a decision maker has incentives that differ from those bearing the consequences. A bonus based solely on revenue may encourage discounts, weak credit terms or acquisitions that destroy value. Controls combine incentives, approval limits, independent review and reliable reporting. More metrics do not automatically mean better governance: poorly chosen measures can be gamed.",
              "Use a decision-rights map: who proposes, who challenges assumptions, who approves, who executes and who monitors? For an acquisition, management may propose, finance may value, legal may examine obligations and the board may approve. An independent challenge should occur before commitments become irreversible.",
              "A dashboard should pair outcomes with drivers and constraints. Operating margin is an outcome; renewal rate or defect rate can be a driver; liquidity and safety are constraints. Define the metric, owner, data source, cadence and escalation threshold. A board should request evidence appropriate to the material risk rather than attempt to manage every daily task."
            ],
            "example": "A division earns a 2% revenue bonus. It offers an extra 90 days of credit to pull 30 of sales forward. Reported revenue rises, but receivables and default exposure rise too. A remedy pairs profitable growth with collection quality, independently checks unusual quarter-end terms, and reviews whether sales were properly recognized.",
            "transfer": "Build a decision-rights map for a 200 capital expenditure. Specify an approval threshold and an escalation trigger without assuming the CFO can override the board.",
            "tutor": {
              "question": "Would replacing a revenue bonus with a profit bonus solve every agency problem?",
              "hints": [
                "Ask which costs and timing the manager can manipulate.",
                "Add capital, collections, safety and long-run customer outcomes."
              ],
              "response": "No. Profit incentives may encourage underinvestment or accounting manipulation. Balanced measures, independent controls and judgment remain necessary."
            }
          }
        ]
      },
      {
        "id": "course-01-m3",
        "title": "Corporate diagnosis",
        "lessons": [
          {
            "id": "c01-diagnose",
            "title": "From observation to recommendation",
            "minutes": 30,
            "body": [
              "Begin an executive analysis with a decision, not a data dump. Define the choice, time horizon, alternatives and success criteria. A useful diagnosis separates observed facts, calculations, causal hypotheses and unresolved uncertainty. Falling margin is a fact if measured consistently; “management is inefficient” is an untested explanation.",
              "Use a driver tree. Revenue equals price times volume within a product; total revenue sums products and geographies. Gross profit depends on mix and direct cost; operating profit also depends on overhead. Cash depends on collections, working capital, investment and financing. Reconcile the tree to reported totals before interpreting it.",
              "Compare alternatives on the same basis. Include doing nothing, staged action and a reversible experiment where possible. Estimate expected benefits, costs, downside, timing and information value. Avoid treating an optimistic forecast as evidence. Distinguish a sensitivity, which changes an input, from a scenario, which changes several related assumptions coherently.",
              "An actionable memo includes recommendation, quantified support, strongest counterargument, information gaps, owner and review date. State what evidence would cause reversal. Do not manufacture numerical precision where estimates are weak. A range with explicit assumptions is often more defensible than one unsupported point forecast."
            ],
            "example": "Atlas has revenue 1,000 and operating profit 150. Next year revenue is 1,100 and profit 143. Margin fell from 15% to 13%; profit fell 7, or about 4.67%, despite 10% growth. The next step is a price/volume/mix and cost bridge, not an automatic conclusion that all costs should be cut.",
            "transfer": "Write a five-sentence recommendation to investigate Atlas. Include one hypothesis, two data requests and one condition under which investment should continue.",
            "tutor": {
              "question": "What can be concluded from growing revenue and declining margin alone?",
              "hints": [
                "Calculate absolute profit, not just percentages.",
                "Ask whether the base and reporting scope changed."
              ],
              "response": "You can calculate the reported change, but cannot identify its cause. Mix, investment, pricing, accounting scope and cost inflation require separate evidence."
            }
          }
        ]
      }
    ],
    "practice": {
      "minutes": 45,
      "instructions": "Work independently on paper first. Record units, equations and assumptions; then select your answers. Review explanations and redo missed calculations without copying.",
      "questions": [
        {
          "id": "p1",
          "prompt": "Equipment revenue 600, service 200. What share of revenue is service?",
          "options": [
            "20%",
            "25%",
            "40%",
            "75%"
          ],
          "correct": 1,
          "explanation": "200 / (600 + 200) = 25%."
        },
        {
          "id": "p2",
          "prompt": "Service revenue 200, direct cost 80; equipment gross profit 180. Service share of total gross profit?",
          "options": [
            "15%",
            "25%",
            "40%",
            "60%"
          ],
          "correct": 2,
          "explanation": "Service gross profit is 120; 120 / (120 + 180) = 40%."
        },
        {
          "id": "p3",
          "prompt": "Which observation most directly challenges recurring-revenue resilience?",
          "options": [
            "A new logo",
            "High renewals at constant price",
            "Customers can cancel monthly and churn is rising",
            "A larger office"
          ],
          "correct": 2,
          "explanation": "Contractual flexibility and churn expose future renewal cash flows."
        },
        {
          "id": "p4",
          "prompt": "Best control for sales booked on unusually generous credit terms?",
          "options": [
            "Reward volume only",
            "Ignore collections",
            "Eliminate all credit",
            "Independent recognition review and collections monitoring"
          ],
          "correct": 3,
          "explanation": "Review recognition and collectability, then align incentives."
        },
        {
          "id": "p5",
          "prompt": "Profit moves from 150 to 143. Percentage change?",
          "options": [
            "−4.67%",
            "−7%",
            "−2%",
            "+10%"
          ],
          "correct": 0,
          "explanation": "(143 − 150) / 150 × 100 = −4.67%."
        },
        {
          "id": "p6",
          "prompt": "A recommendation with an explicit reversal condition is best described as:",
          "options": [
            "Weak commitment",
            "Testable decision rule",
            "A guarantee",
            "An accounting entry"
          ],
          "correct": 1,
          "explanation": "A decision rule states which future evidence would change the action."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "A platform user is an employee, while procurement pays. What should the model distinguish?",
          "options": [
            "Only users",
            "Only technology",
            "User benefit, payer economics and purchasing authority",
            "Only employee headcount"
          ],
          "correct": 2,
          "explanation": "Adoption, willingness to pay and purchase approval are distinct."
        },
        {
          "id": "e2",
          "prompt": "Revenue grows from 800 to 920, profit from 120 to 115. What happened to margin?",
          "options": [
            "15% to 12.5%",
            "12.5% to 15%",
            "15% to 15%",
            "Profit rose"
          ],
          "correct": 0,
          "explanation": "120/800 = 15%; 115/920 = 12.5%."
        },
        {
          "id": "e3",
          "prompt": "Which is a causal hypothesis rather than an observed fact?",
          "options": [
            "Reported sales were 920",
            "Margin was 12.5%",
            "Profit was 115",
            "A weaker product mix caused the decline"
          ],
          "correct": 3,
          "explanation": "Causation needs evidence beyond aggregate results."
        },
        {
          "id": "e4",
          "prompt": "Who generally oversees executives rather than running daily operations?",
          "options": [
            "Every supplier",
            "The board",
            "External customers",
            "Every shareholder individually"
          ],
          "correct": 1,
          "explanation": "The board oversees management within applicable governance rules."
        },
        {
          "id": "e5",
          "prompt": "Strongest next step before an irreversible restructuring?",
          "options": [
            "Cut every department equally",
            "Assume growth solves everything",
            "Reconcile segment economics and test alternatives",
            "Copy a competitor"
          ],
          "correct": 2,
          "explanation": "Comparable alternatives and reconciled economics support a defensible choice."
        }
      ],
      "written": "Fictional Orion reports revenue 800 then 920 and operating profit 120 then 115. Its CEO proposes a 10% cut to every department. Write 500–700 words: calculate growth, margins and profit change; separate facts from hypotheses; propose three evidence requests; compare the blanket cut with a targeted investigation and a staged pilot; assign approval and monitoring roles.",
      "model": "Revenue grew 15%; profit declined 4.17%; margin fell 2.5 percentage points. The aggregates cannot establish cost inefficiency. Request price/volume/mix, segment contribution and discretionary investment data with consistent scope. A blanket cut could damage strong units. A short diagnostic and targeted pilot preserve options, with management executing and the board overseeing material strategy and risk.",
      "rubric": [
        "Calculations reconcile with stated units and periods.",
        "Claims separate evidence, inference and missing data.",
        "Alternatives and agency risks are evaluated.",
        "Recommendation names an owner, trigger and limitations."
      ]
    },
    "portfolio": {
      "title": "Corporate business-model dossier",
      "prompt": "Choose a large public corporation and an explicitly dated annual report from its investor-relations site. Produce a 900–1,200 word dossier; do not present fictional examples as company facts.",
      "minutes": 180,
      "requirements": [
        "Cite report year, page or section and links for revenue streams, segments and material risks.",
        "Map customer/user/payer, activities, direct versus shared costs, and cash dependencies.",
        "Create a governance decision map and dashboard with four defined metrics.",
        "Defend one testable recommendation and its strongest counterargument."
      ],
      "rubric": [
        "Calculations reconcile with stated units and periods.",
        "Claims separate evidence, inference and missing data.",
        "Alternatives and agency risks are evaluated.",
        "Recommendation names an owner, trigger and limitations."
      ]
    },
    "readings": [
      {
        "title": "Financial accounting: stakeholders and statements",
        "url": "https://openstax.org/books/principles-financial-accounting/pages/1-why-it-matters",
        "task": "Read chapter 1 and sections 2.1–2.3. Write a one-page comparison of the decisions served by the income statement, balance sheet and cash-flow statement.",
        "minutes": 90
      }
    ],
    "prerequisites": []
  },
  "course-02": {
    "status": "authored introductory sequence",
    "description": "Build the quantitative toolkit needed to challenge corporate growth, valuation and investment claims. Rates are annual unless explicitly stated; cash flows occur at period end.",
    "outcomes": [
      "Distinguish percent changes from percentage points.",
      "Discount cash flows and calculate NPV.",
      "Use expected values and sensitivity analysis without hiding downside."
    ],
    "modules": [
      {
        "id": "course-02-m1",
        "title": "Rates and scale",
        "lessons": [
          {
            "id": "c02-rates",
            "title": "Growth, margins and weighted averages",
            "minutes": 30,
            "body": [
              "Always state the base, period and unit. A change from 20% margin to 15% is a fall of 5 percentage points and a 25% relative decline. A revenue increase from 200 to 240 is 20%, because the base is 200. Reversing the change requires dividing by 240: a fall of 16.67% returns revenue to 200. Equal percentage increases and decreases do not cancel.",
              "Compound growth multiplies factors. Two years at 10% give 1.1 × 1.1 = 1.21, or 21% total growth. For positive endpoints, CAGR = (ending / beginning)^(1 / years) − 1. CAGR smooths a path and can conceal volatility. It is not defined in the usual real-valued business interpretation for zero or negative starting values.",
              "Consolidated margins use weights. Add profit numerators and revenue denominators before dividing. A simple average of segment margins is valid only when revenues are equal. Likewise, distinguish a price index from actual sales growth and a nominal amount from an inflation-adjusted amount.",
              "Check order of magnitude before trusting a spreadsheet. One billion equals one thousand million. Keep intermediate precision, then round the final answer and state the convention. Ratios with mismatched periods or inconsistent definitions can look precise while being economically meaningless."
            ],
            "example": "Division A has revenue 900 and margin 10%; B has revenue 100 and margin 40%. Total profit = 90 + 40 = 130; consolidated margin = 130/1,000 = 13%, not the unweighted average 25%. Revenue moving 100 to 144 in two years implies CAGR = sqrt(1.44) − 1 = 20%.",
            "transfer": "Recompute consolidated margin if B doubles revenue with unchanged segment margins. Explain why consolidated margin rises even though neither segment improved.",
            "tutor": {
              "question": "Why is a mean of divisional margins often misleading?",
              "hints": [
                "Identify each denominator.",
                "Add profits and revenues before dividing."
              ],
              "response": "A small high-margin division should not carry the same weight as a much larger low-margin division. Mix can change the consolidated margin."
            }
          }
        ]
      },
      {
        "id": "course-02-m2",
        "title": "Time value of money",
        "lessons": [
          {
            "id": "c02-discount",
            "title": "Discounting and investment decisions",
            "minutes": 30,
            "body": [
              "A dollar received later has a different economic value from a dollar available now because of opportunity cost, risk and timing. Future value of a present amount P after n periods at rate r is P(1+r)^n. Present value of future cash F is F/(1+r)^n. Rate and period must match. A nominal annual rate compounded monthly uses the stated periodic convention; do not silently divide an effective annual rate by twelve.",
              "Net present value adds discounted incremental cash inflows and subtracts incremental outflows including the initial investment. NPV = −I0 + sum(CFt/(1+r)^t). Positive NPV supports value creation relative to the assumed opportunity cost, not a guarantee of realized profits. Choose a discount rate consistent with the risk, currency and inflation treatment of the cash flows.",
              "Discount cash flows, not accounting earnings. Depreciation is noncash but can affect taxes; capital expenditure is a cash outflow. Exclude sunk costs and include opportunity costs. Working capital tied up initially can be released later. Avoid discounting nominal cash at a real rate. Advanced rate estimation belongs in corporate finance, not a shortcut based on the loan rate alone.",
              "Payback time ignores value after recovery and usually ignores discounting. It can help screen liquidity exposure but should not replace NPV. A positive NPV investment can still create a near-term liquidity problem. Report both the value conclusion and funding needs."
            ],
            "example": "A project costs 100 now and returns 60 at the end of each of two years. At 10%, PV = 60/1.1 + 60/1.21 = 104.13; NPV = 4.13. At 15%, PV = 97.54 and NPV = −2.46. The recommendation depends on risk and opportunity cost assumptions.",
            "transfer": "Compute NPV if the second cash flow falls to 50 at a 10% rate. Explain why a positive accounting profit would not reverse a negative NPV result.",
            "tutor": {
              "question": "Why can a profitable project have negative NPV?",
              "hints": [
                "Separate profit from incremental cash.",
                "Compare the timing of cash with the opportunity cost."
              ],
              "response": "Late or insufficient cash may fail to compensate for the investment and risk even when accounting recognizes positive profit."
            }
          }
        ]
      },
      {
        "id": "course-02-m3",
        "title": "Uncertainty and decisions",
        "lessons": [
          {
            "id": "c02-risk",
            "title": "Expected value and scenario discipline",
            "minutes": 30,
            "body": [
              "Expected value is a probability-weighted sum of outcomes. Probabilities must sum to one, outcomes must use the same units and horizon, and mutually exclusive scenarios must not overlap. Expected value is not necessarily a possible realized outcome. A company cannot pay payroll with an average across futures that will not all occur.",
              "A sensitivity changes one input while holding others fixed. A scenario changes related inputs together: recession may reduce volume, lengthen collections and impair liquidity simultaneously. Do not combine optimistic assumptions that are mutually inconsistent. Identify the variable at which a recommendation changes sign, such as break-even NPV.",
              "Probability estimates need justification. Use base rates, comparable data and an explicit range when evidence is weak. A precise-looking probability does not remove uncertainty. Report downside magnitude, funding capacity and reversibility alongside expected return. An investment with high expected value can be unacceptable if one plausible outcome threatens solvency.",
              "An information-gathering pilot has a cost and may delay benefits, but can improve decisions. Compare the value of learning with pilot cost and foregone opportunity. Avoid assuming perfect information will be available. Document what the pilot measures and how those measurements change the next commitment."
            ],
            "example": "A project has 25% chance of NPV −40, 50% chance of +10 and 25% chance of +60. Expected NPV = −10 + 5 + 15 = +10. That does not remove a 25% chance of losing 40. If the company can absorb only 20 of loss, a smaller staged exposure or rejection may be appropriate.",
            "transfer": "Propose a pilot that can reduce a demand uncertainty before a large investment. State the cost, success metric and decision threshold.",
            "tutor": {
              "question": "Does positive expected NPV automatically imply approval?",
              "hints": [
                "Inspect the full distribution.",
                "Compare the downside with liquidity and risk capacity."
              ],
              "response": "No. Funding constraints, extreme downside, correlation with other exposures and information quality also matter."
            }
          }
        ]
      }
    ],
    "practice": {
      "minutes": 45,
      "instructions": "Work independently on paper first. Record units, equations and assumptions; then select your answers. Review explanations and redo missed calculations without copying.",
      "questions": [
        {
          "id": "p1",
          "prompt": "Margin falls from 20% to 15%. Relative decline?",
          "options": [
            "5%",
            "25%",
            "35%",
            "75%"
          ],
          "correct": 1,
          "explanation": "(15−20)/20 = −25%; the change is −5 percentage points."
        },
        {
          "id": "p2",
          "prompt": "Revenue 100 to 144 over two years. CAGR?",
          "options": [
            "44%",
            "22%",
            "20%",
            "10%"
          ],
          "correct": 2,
          "explanation": "(144/100)^(1/2)−1 = 20%."
        },
        {
          "id": "p3",
          "prompt": "Revenue 900 at 10% margin and 100 at 40%. Consolidated margin?",
          "options": [
            "25%",
            "13%",
            "10%",
            "40%"
          ],
          "correct": 1,
          "explanation": "(90+40)/(900+100)=13%."
        },
        {
          "id": "p4",
          "prompt": "PV of 121 due in two years at 10%?",
          "options": [
            "100",
            "110",
            "121",
            "146.41"
          ],
          "correct": 0,
          "explanation": "121/1.1² = 100."
        },
        {
          "id": "p5",
          "prompt": "Invest 100; receive 60 at years 1 and 2; discount at 10%. NPV?",
          "options": [
            "20",
            "−4.13",
            "104.13",
            "4.13"
          ],
          "correct": 3,
          "explanation": "−100+60/1.1+60/1.21 = 4.13."
        },
        {
          "id": "p6",
          "prompt": "NPV −40, 10, 60 with probabilities .25, .50, .25. Expected NPV?",
          "options": [
            "30",
            "10",
            "0",
            "60"
          ],
          "correct": 1,
          "explanation": "−40×.25+10×.5+60×.25=10."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "A 20% increase followed by a 20% decrease leaves an initial 100 at:",
          "options": [
            "100",
            "104",
            "96",
            "80"
          ],
          "correct": 2,
          "explanation": "100×1.2×.8 = 96."
        },
        {
          "id": "e2",
          "prompt": "Division revenues 600 and 400; margins 20% and 5%. Consolidated margin?",
          "options": [
            "12.5%",
            "14%",
            "25%",
            "10%"
          ],
          "correct": 1,
          "explanation": "(120+20)/1000 = 14%."
        },
        {
          "id": "e3",
          "prompt": "Invest 100 now, receive 121 in year 2 at a 10% discount rate. NPV?",
          "options": [
            "21",
            "10",
            "−10",
            "0"
          ],
          "correct": 3,
          "explanation": "121/1.21−100=0."
        },
        {
          "id": "e4",
          "prompt": "A recession case changes volume and collection delays together. This is:",
          "options": [
            "A coherent scenario",
            "A single-variable sensitivity",
            "A sunk cost",
            "A guaranteed outcome"
          ],
          "correct": 0,
          "explanation": "Several economically related assumptions change together."
        },
        {
          "id": "e5",
          "prompt": "An already paid research cost that cannot be recovered should be:",
          "options": [
            "Added to every future alternative",
            "Used as the discount rate",
            "Excluded from incremental NPV",
            "Treated as future revenue"
          ],
          "correct": 2,
          "explanation": "A sunk cost does not change between future alternatives."
        }
      ],
      "written": "Project A costs 100 and returns 60 in years 1 and 2. Project B costs 100 and returns 125 only in year 2. At 10%, calculate both NPVs. Recalculate at 15%. In 500–700 words, recommend one or neither, state what the calculation leaves out and propose one downside scenario.",
      "model": "At 10%, A is 4.13 and B is 3.31. At 15%, A is −2.46 and B is −5.48. A ranks above B at both rates, but neither clears a 15% hurdle. Equal risk, horizon, funding and incremental cash assumptions are necessary for that comparison. Liquidity, uncertainty and nonfinancial effects need additional analysis.",
      "rubric": [
        "Rates, units and cash timing are consistent.",
        "Calculations are reproducible and checked.",
        "Uncertainty and downside capacity are addressed.",
        "Decision follows the evidence and states limits."
      ]
    },
    "portfolio": {
      "title": "Investment mathematics workbook",
      "prompt": "Produce an auditable workbook in text or a spreadsheet for a fictional 150 investment returning 55, 65 and 75 over three years.",
      "minutes": 180,
      "requirements": [
        "Show PV and NPV at 8%, 12% and 16%, with formulas and timing.",
        "Include a 20% reduction in all inflows and a one-year delay scenario.",
        "Compare nominal versus real cash flow treatment in plain language.",
        "Write a 600-word decision memo with liquidity limits and reversal conditions."
      ],
      "rubric": [
        "Rates, units and cash timing are consistent.",
        "Calculations are reproducible and checked.",
        "Uncertainty and downside capacity are addressed.",
        "Decision follows the evidence and states limits."
      ]
    },
    "readings": [
      {
        "title": "Economics: choice and opportunity cost",
        "url": "https://openstax.org/books/principles-economics-3e/pages/1-introduction",
        "task": "Read chapter 2, identify opportunity costs for three corporate investment choices, and explain why a sunk cost differs from an opportunity cost.",
        "minutes": 90
      }
    ]
  },
  "course-03": {
    "status": "authored introductory sequence",
    "description": "Connect unit economics, pricing, operating leverage and cash conversion in a large-company setting. Models deliberately isolate drivers before adding real-world complexity.",
    "outcomes": [
      "Calculate contribution margin and break-even volume.",
      "Reconcile profit changes using price, volume and costs.",
      "Explain why profitable growth can consume cash."
    ],
    "modules": [
      {
        "id": "course-03-m1",
        "title": "Contribution and capacity",
        "lessons": [
          {
            "id": "c03-unit",
            "title": "Unit economics and break-even",
            "minutes": 30,
            "body": [
              "Contribution per unit is price minus variable cost per unit. Total contribution pays fixed operating costs; any remainder is operating profit in the simplified model. Distinguish contribution margin from gross margin: financial statements may include fixed manufacturing overhead in cost of goods sold. Label your definition before comparing businesses.",
              "Break-even units equal fixed costs divided by contribution per unit, provided contribution is positive. If units must be whole, round up. Break-even sales equal fixed costs divided by contribution margin ratio. If contribution is zero or negative, higher volume alone cannot pay fixed cost. A single-product formula assumes constant price, unit cost and fixed costs within a relevant operating range.",
              "Capacity creates step costs. A second factory, additional shift or distribution center may be needed above a threshold. Do not extend one straight line indefinitely. For a multiproduct company, break-even depends on sales mix: replacing a high-contribution product with a low-contribution one changes required volume.",
              "Operating leverage describes sensitivity of profit to volume when fixed costs are material. Near break-even, small revenue changes can cause large profit percentage changes. High leverage is not inherently good or bad: it can produce strong upside and severe downside. Track capacity utilization and the cash cost of commitments."
            ],
            "example": "A component sells for 200, variable cost is 120 and annual fixed costs are 24 million. Contribution is 80 per unit; break-even is 300,000 units. At 400,000 units, revenue is 80 million and operating profit is 8 million. A 10% unit decline to 360,000 lowers profit to 4.8 million, a 40% decline.",
            "transfer": "Recalculate break-even if price falls 5% and variable unit cost is unchanged. Explain the capacity assumptions required.",
            "tutor": {
              "question": "Why does a 10% volume decline produce a 40% profit decline here?",
              "hints": [
                "Fixed costs do not decline with volume.",
                "Compare lost contribution with initial profit."
              ],
              "response": "40,000 lost units remove 3.2 million contribution from an 8 million profit base. The fixed-cost commitment amplifies the change."
            }
          }
        ]
      },
      {
        "id": "course-03-m2",
        "title": "Pricing and profit bridges",
        "lessons": [
          {
            "id": "c03-price",
            "title": "Price, volume and mix",
            "minutes": 30,
            "body": [
              "Price changes alter unit contribution and may alter quantity demanded. A price cut that grows revenue can still reduce operating profit. For a one-product price decision, calculate old contribution, new contribution per unit and the unit volume required to preserve total contribution. This isolates the commercial hurdle before forecasting demand.",
              "A transparent profit bridge separates price, volume and cost effects using a declared order. One valid convention measures price at old volume, volume at new price and old variable cost, and unit-cost change at new volume. These terms reconcile exactly; different conventions allocate interaction effects differently. Never add two inconsistent bridges.",
              "Mix matters when products or regions have different margins. Consolidated revenue growth can coincide with declining margin because low-contribution lines grow faster. Constant-currency and like-for-like comparisons may help diagnose change but need definitions and reconciliation to reported results.",
              "A proposed price action should include retention risk, competitive response, sales incentives and contractual constraints. Historical correlation between price and sales may reflect changes in product quality or macroeconomic demand. A controlled pilot or segmented test can improve inference, but a short test may miss long-term churn."
            ],
            "example": "Price falls from 200 to 190, with variable cost 120. Old contribution is 80 and new contribution 70. To preserve total contribution from 400,000 units, required volume is 32 million/70 = 457,143 rounded up, or about 14.29% growth. A forecast of only 10% growth gives contribution 30.8 million and profit 6.8 million.",
            "transfer": "Calculate the unit growth needed for a 10% price cut with the same cost. Then explain what would invalidate the constant-cost assumption.",
            "tutor": {
              "question": "Why is “a 5% price cut only needs 5% more volume” wrong?",
              "hints": [
                "Profit depends on contribution, not revenue alone.",
                "Divide old contribution by new contribution."
              ],
              "response": "A 5% price cut is a larger percentage reduction in contribution. Here 80/70−1 is 14.29%, with unchanged fixed costs."
            }
          }
        ]
      },
      {
        "id": "course-03-m3",
        "title": "Growth and cash",
        "lessons": [
          {
            "id": "c03-cash",
            "title": "Working capital and cash conversion",
            "minutes": 30,
            "body": [
              "Working capital tied to operations includes receivables plus inventory minus operating payables in a simplified model. An increase consumes cash because customers have not paid, inventory has not sold or suppliers were paid earlier. Distinguish this operating definition from balance-sheet current assets minus current liabilities.",
              "Days sales outstanding uses receivables divided by credit sales times days. Inventory days use inventory divided by cost of goods sold times days; payable days use payables divided by the relevant purchase base, often approximated by cost of goods sold when purchases are unavailable. State averaging and denominator conventions. Cash conversion cycle equals receivable days plus inventory days minus payable days.",
              "A growing company may need to fund working capital before collecting sales. Faster collections can release cash once; it does not create recurring annual profit of the same amount. Forcing suppliers to wait may improve reported cash temporarily while increasing disruption or supplier prices. Optimize the system, not one metric.",
              "An executive should reconcile operating profit to operating cash flow, then examine capital expenditure and financing needs. Cash from borrowing is not operating success. Free cash flow definitions vary; here use operating cash flow less capital expenditure. Show the definition and disclose excluded obligations."
            ],
            "example": "Annual revenue is 365 million, all credit sales. DSO falls from 60 to 45 at unchanged sales: approximate receivables release is 15 million. Inventory days 50 and payable days 35 give a new cycle of 60 days. If operating cash flow is 80 and capital expenditure is 50, simple free cash flow is 30 million.",
            "transfer": "Estimate the receivables funding needed when annual sales grow from 365 to 438 at unchanged 45-day DSO. Separate growth funding from an improvement in collection speed.",
            "tutor": {
              "question": "Can working-capital improvement justify the same cash benefit every year?",
              "hints": [
                "Distinguish a stock from a flow.",
                "An unchanged lower receivables balance cannot be released repeatedly."
              ],
              "response": "The transition releases cash once relative to the old policy. Later growth and operational changes determine future cash needs."
            }
          }
        ]
      }
    ],
    "practice": {
      "minutes": 45,
      "instructions": "Work independently on paper first. Record units, equations and assumptions; then select your answers. Review explanations and redo missed calculations without copying.",
      "questions": [
        {
          "id": "p1",
          "prompt": "Price 200, variable cost 120. Contribution per unit?",
          "options": [
            "120",
            "80",
            "200",
            "40"
          ],
          "correct": 1,
          "explanation": "200−120=80."
        },
        {
          "id": "p2",
          "prompt": "Fixed costs 24 million, contribution 80. Break-even units?",
          "options": [
            "300,000",
            "200,000",
            "120,000",
            "24,000"
          ],
          "correct": 0,
          "explanation": "24,000,000/80=300,000."
        },
        {
          "id": "p3",
          "prompt": "At 400,000 units, contribution 80 and fixed cost 24 million, profit?",
          "options": [
            "32 million",
            "56 million",
            "8 million",
            "80 million"
          ],
          "correct": 2,
          "explanation": "400,000×80−24 million=8 million."
        },
        {
          "id": "p4",
          "prompt": "Contribution falls from 80 to 70. Required volume growth to preserve contribution?",
          "options": [
            "5%",
            "10%",
            "12.5%",
            "14.29%"
          ],
          "correct": 3,
          "explanation": "80/70−1=14.29%."
        },
        {
          "id": "p5",
          "prompt": "Receivable days 45, inventory days 50, payable days 35. Cycle?",
          "options": [
            "130 days",
            "60 days",
            "30 days",
            "45 days"
          ],
          "correct": 1,
          "explanation": "45+50−35=60."
        },
        {
          "id": "p6",
          "prompt": "Sales 365 million, all on credit; DSO drops 15 days. Cash release using 365 days?",
          "options": [
            "15 million",
            "365 million",
            "45 million",
            "No release"
          ],
          "correct": 0,
          "explanation": "365/365×15=15 million."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "Price 100, variable cost 60, fixed cost 12 million. Break-even units?",
          "options": [
            "120,000",
            "200,000",
            "300,000",
            "500,000"
          ],
          "correct": 2,
          "explanation": "12 million/(100−60)=300,000."
        },
        {
          "id": "e2",
          "prompt": "Price cut to 90 with cost 60. Units needed to preserve contribution from 300,000 old units?",
          "options": [
            "330,000",
            "400,000",
            "270,000",
            "300,000"
          ],
          "correct": 1,
          "explanation": "Old contribution 12 million divided by new unit contribution 30 = 400,000."
        },
        {
          "id": "e3",
          "prompt": "Sales grow but DSO worsens. Likely direct cash effect, all else equal?",
          "options": [
            "More cash tied up in receivables",
            "Receivables disappear",
            "Automatic margin growth",
            "No funding effect"
          ],
          "correct": 0,
          "explanation": "More sales awaiting collection increase the receivables investment."
        },
        {
          "id": "e4",
          "prompt": "Operating cash flow 95, capital expenditure 65. Simple free cash flow?",
          "options": [
            "160",
            "95",
            "65",
            "30"
          ],
          "correct": 3,
          "explanation": "95−65=30."
        },
        {
          "id": "e5",
          "prompt": "A plant expansion creates a new fixed-cost tier. Which model needs revision?",
          "options": [
            "A historical cash balance",
            "Constant fixed cost at all volumes",
            "The definition of revenue",
            "The unit of currency"
          ],
          "correct": 1,
          "explanation": "The old relevant range no longer holds."
        }
      ],
      "written": "Fictional Meridian sells 500,000 units at 100, variable cost 60, fixed cost 12 million. Sales proposes a 10% price cut for 20% volume growth. Calculate old and proposed profit, break-even quantity at the new price, and volume needed to preserve old profit. Write 500–700 words including collection risk and one staged alternative.",
      "model": "Old profit is 8 million. Proposed volume 600,000 at contribution 30 gives profit 6 million. New break-even is 400,000; preserving old profit requires 20 million/30 = 666,667 whole units, about 33.33% growth. The proposed revenue rises 8% (50 to 54 million) while profit falls 25%. Include working-capital and capacity effects before approval.",
      "rubric": [
        "Contribution and break-even calculations reconcile.",
        "Mix, capacity and cost behavior assumptions are explicit.",
        "Profit and cash effects are separated.",
        "Alternatives and implementation risks support the recommendation."
      ]
    },
    "portfolio": {
      "title": "Operating economics decision pack",
      "prompt": "Build a two-product operating model for a fictional global industrial division; include units, prices, variable costs, fixed costs and collection days.",
      "minutes": 180,
      "requirements": [
        "Compute base profit, break-even under a stated mix, and a 10% demand decline.",
        "Compare a price cut, a cost program and no action on the same basis.",
        "Bridge base to proposed profit with reconciling effects and a declared order.",
        "Estimate working-capital funding and write an 800-word executive recommendation."
      ],
      "rubric": [
        "Contribution and break-even calculations reconcile.",
        "Mix, capacity and cost behavior assumptions are explicit.",
        "Profit and cash effects are separated.",
        "Alternatives and implementation risks support the recommendation."
      ]
    },
    "readings": [
      {
        "title": "Accounting: merchandising and inventory",
        "url": "https://openstax.org/books/principles-financial-accounting/pages/1-why-it-matters",
        "task": "Read chapters 6 and 10 selectively on gross profit and inventory. Write 400 words comparing gross margin, contribution margin and inventory cash requirements.",
        "minutes": 90
      }
    ]
  },
  "course-04": {
    "status": "authored introductory sequence",
    "description": "Study venture formation through a corporate new-venture lens: opportunity validation, staged investment, ownership and governance. Legal structures are conceptual; actual requirements depend on jurisdiction.",
    "outcomes": [
      "Convert a venture idea into falsifiable commercial assumptions.",
      "Calculate runway and ownership dilution.",
      "Design staged funding gates and risk controls."
    ],
    "modules": [
      {
        "id": "course-04-m1",
        "title": "Opportunity validation",
        "lessons": [
          {
            "id": "c04-validate",
            "title": "From idea to investable hypothesis",
            "minutes": 30,
            "body": [
              "A corporate venture needs a specific customer problem and a reason the parent can solve it better than alternatives. Separate market attractiveness from the parent’s advantage. A large market does not prove access, willingness to pay or sustainable economics. State the use case, buyer, purchasing process and competing solution.",
              "Build a bottom-up serviceable market estimate: reachable accounts times realistic adoption times annual contract value. Total addressable market is a ceiling under assumptions, not a revenue forecast. Avoid multiplying a vast industry by an arbitrary market share. Distinguish pilots, signed contracts, recognized revenue and collected cash.",
              "Customer discovery should test behavior, not compliments. Ask about actual workflow, spending authority and the cost of the present problem. A nonbinding letter of intent is weaker evidence than paid usage and renewal. Track objections and nonresponders to avoid selecting only enthusiastic contacts.",
              "A validation plan has a hypothesis, test, sample rationale, cost cap, success criterion and kill criterion. Protect privacy and comply with applicable requirements. A pilot inside a friendly parent division may not generalize to external procurement, integration demands or competitive pricing."
            ],
            "example": "A venture can reach 2,000 enterprise accounts. At 5% adoption and 40,000 annual contract value, annual revenue would be 4 million. At 2% adoption it is 1.6 million. Neither is a fact about demand; both are scenarios requiring tests of reach, conversion and price.",
            "transfer": "Design a paid pilot for an enterprise analytics product. Define one adoption measure and one repeat-use measure that would lead to stopping investment.",
            "tutor": {
              "question": "Why is a market estimate not a forecast?",
              "hints": [
                "List its assumptions.",
                "Ask which assumptions have behavioral evidence."
              ],
              "response": "Reachable accounts, conversion, price and timing are uncertain. A forecast needs an evidenced acquisition process and adoption timeline."
            }
          }
        ]
      },
      {
        "id": "course-04-m2",
        "title": "Formation and funding",
        "lessons": [
          {
            "id": "c04-fund",
            "title": "Ownership, dilution and runway",
            "minutes": 30,
            "body": [
              "Entity form influences liability, governance, taxation and financing flexibility. A corporation, partnership and subsidiary differ in ways that depend on jurisdiction and contracts. Limited liability does not erase guarantees, misconduct obligations or the need for insurance and controls. Obtain qualified legal and tax advice before actual formation or securities activity.",
              "A capitalization table records ownership claims and the basis for calculating percentages. In a simple priced equity round, post-money value equals pre-money value plus new cash. New investor ownership equals investment divided by post-money value. Existing holders are diluted unless they invest proportionately. Options, convertible claims and preference rights can change the result materially.",
              "Runway equals available cash divided by net cash burn per period only when burn is stable and cash is unrestricted. One-time costs, payment delays, minimum liquidity, debt covenants and rising hiring costs reduce usable runway. Revenue is not cash received, and a prospective funding round is not available cash.",
              "Fundraising terms include control as well as percentage ownership. Board seats, veto rights, liquidation preferences and follow-on rights can shape outcomes. A headline valuation alone cannot rank financing alternatives. Corporate sponsors should also examine strategic restrictions that could deter future customers or investors."
            ],
            "example": "Pre-money value is 12 million and new cash is 3 million. Post-money is 15 million; the new investor owns 20% and existing holders collectively retain 80%, ignoring other claims. With 3 million cash, monthly cash spending 500,000 and receipts 200,000, burn is 300,000 and simple runway is 10 months before reserves and one-time costs.",
            "transfer": "Recalculate runway after a 600,000 setup outlay and a 300,000 minimum cash reserve. Explain why a sales pipeline is excluded from available cash.",
            "tutor": {
              "question": "Does a 20% new investor stake mean the company received 20% of its pre-money value?",
              "hints": [
                "Write pre-money plus cash equals post-money.",
                "Use investment divided by post-money value."
              ],
              "response": "No. Three on a pre-money twelve is 25% of pre-money but 20% of post-money. Ownership uses the post-money denominator."
            }
          }
        ]
      },
      {
        "id": "course-04-m3",
        "title": "Stage-gate governance",
        "lessons": [
          {
            "id": "c04-gates",
            "title": "Commit capital as evidence improves",
            "minutes": 30,
            "body": [
              "A venture plan should connect strategy, unit economics, staffing, financing, milestones and failure conditions. A static five-year spreadsheet is a set of assumptions, not validation. Use staged commitments when demand, technology or regulatory uncertainty is high. Each stage should reduce a named uncertainty.",
              "Distinguish a milestone from an activity. “Hire five engineers” measures spending, while “three independent customers renew at target price” tests value capture. A useful gate specifies the metric definition, evidence quality, reviewer, decision date and action if results disappoint. Precommit to kill or redesign criteria before sunk costs influence judgment.",
              "Corporate ventures face internal opportunity costs and conflicts. The parent may supply distribution or data, but internal transfer prices can conceal uneconomic delivery. Require arm’s-length logic for material internal services and protect customer interests. Cannibalization of the parent’s existing product may be strategically rational but should be modeled, not ignored.",
              "Governance must balance learning speed with financial discipline. Define delegated spending, contractual authority, security review and escalation for safety or compliance concerns. A successful commercial pilot is not evidence of production reliability at scale. Separate customer validation, technical readiness and operating control gates."
            ],
            "example": "A board authorizes 1 million for validation but releases only 250,000 initially. Gate 1 requires five paid external pilots at target price and verified implementation cost below 20,000 per account. Failure leads to redesign or stopping; meeting the gate permits the next 350,000, not automatic release of the full budget.",
            "transfer": "Write three independent gates for a corporate software venture: demand, economics and operating risk. Specify who can approve exceptions.",
            "tutor": {
              "question": "Why might a corporate pilot hide weak economics?",
              "hints": [
                "Ask which resources the parent provides for free.",
                "Include opportunity costs, external selling costs and implementation support."
              ],
              "response": "Subsidized distribution, labor or infrastructure may disappear outside the parent. A comparable stand-alone model exposes the dependence."
            }
          }
        ]
      }
    ],
    "practice": {
      "minutes": 45,
      "instructions": "Work independently on paper first. Record units, equations and assumptions; then select your answers. Review explanations and redo missed calculations without copying.",
      "questions": [
        {
          "id": "p1",
          "prompt": "2,000 reachable accounts × 5% adoption × 40,000 annual price equals:",
          "options": [
            "400,000",
            "4 million",
            "40 million",
            "80 million"
          ],
          "correct": 1,
          "explanation": "2,000×.05×40,000=4 million."
        },
        {
          "id": "p2",
          "prompt": "Pre-money 12, investment 3. New investor ownership in the simple model?",
          "options": [
            "25%",
            "3%",
            "20%",
            "80%"
          ],
          "correct": 2,
          "explanation": "3/(12+3)=20%."
        },
        {
          "id": "p3",
          "prompt": "Cash 3 million, spending .5 and receipts .2 million monthly. Simple runway?",
          "options": [
            "6 months",
            "10 months",
            "15 months",
            "30 months"
          ],
          "correct": 1,
          "explanation": "Net burn is .3 million per month; 3/.3=10."
        },
        {
          "id": "p4",
          "prompt": "With .6 million setup cost and .3 reserve, same burn, usable runway?",
          "options": [
            "7 months",
            "8 months",
            "9 months",
            "10 months"
          ],
          "correct": 0,
          "explanation": "(3−.6−.3)/.3=7."
        },
        {
          "id": "p5",
          "prompt": "Strongest commercial milestone?",
          "options": [
            "Hire ten people",
            "Publish a website",
            "Hold a kickoff",
            "Independent paying customers renew at target price"
          ],
          "correct": 3,
          "explanation": "Renewal at target price is behavior that tests continuing willingness to pay."
        },
        {
          "id": "p6",
          "prompt": "Which funding comparison is incomplete?",
          "options": [
            "Comparing valuation alone",
            "Reviewing board rights",
            "Reviewing preferences",
            "Modeling dilution"
          ],
          "correct": 0,
          "explanation": "Control and distribution rights can materially change economics."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "Pre-money 18 plus investment 6. New ownership?",
          "options": [
            "33.33%",
            "25%",
            "20%",
            "6%"
          ],
          "correct": 1,
          "explanation": "6/24=25%."
        },
        {
          "id": "e2",
          "prompt": "Cash 2.4, monthly burn .3, reserve .6, all million. Runway to reserve?",
          "options": [
            "8 months",
            "10 months",
            "6 months",
            "4 months"
          ],
          "correct": 2,
          "explanation": "(2.4−.6)/.3=6."
        },
        {
          "id": "e3",
          "prompt": "Which is weakest demand evidence?",
          "options": [
            "A compliment in an interview",
            "Repeat paid usage",
            "Signed paid contract",
            "Independent renewal"
          ],
          "correct": 0,
          "explanation": "Stated enthusiasm does not establish buying behavior."
        },
        {
          "id": "e4",
          "prompt": "Parent provides free staff. Sound stand-alone economics should:",
          "options": [
            "Ignore labor",
            "Count only revenue",
            "Assume free labor forever",
            "Include labor opportunity cost"
          ],
          "correct": 3,
          "explanation": "A resource has economic cost even when not charged internally."
        },
        {
          "id": "e5",
          "prompt": "A gate misses its precommitted demand criterion. Best response?",
          "options": [
            "Release all funding anyway",
            "Review evidence and apply stop/redesign rule",
            "Hide the criterion",
            "Increase the valuation"
          ],
          "correct": 1,
          "explanation": "Governance should apply the agreed rule and document any justified exception."
        }
      ],
      "written": "A corporate venture requests 6 million at pre-money 18 million. It begins with 2.4 million cash, burns .3 million monthly and requires a .6 million reserve. In 500–700 words calculate dilution and runway, assess whether a fundraising delay of eight months is tolerable, and propose staged financing and validation gates.",
      "model": "New investors own 25% ignoring other claims. Usable runway is six months, so an eight-month funding delay breaches the reserve under unchanged burn. Do not treat the requested six million as committed cash. Options include reducing burn, funding a smaller milestone or securing committed financing earlier. Gates should test paid external demand, implementation economics and operating controls.",
      "rubric": [
        "Commercial assumptions are falsifiable and evidenced.",
        "Dilution and cash calculations use correct bases.",
        "Stages limit exposure and have explicit kill criteria.",
        "Governance, conflicts and specialist questions are recognized."
      ]
    },
    "portfolio": {
      "title": "Corporate venture investment brief",
      "prompt": "Propose a new venture for a large fictional corporate parent. Submit a 1,000-word investment brief with a simple capitalization and cash-runway model.",
      "minutes": 180,
      "requirements": [
        "Define buyer, problem, alternatives and parent-specific advantage.",
        "Estimate the serviceable market bottom-up with bear/base cases.",
        "Show dilution, cash runway, reserves and staged funding requirements.",
        "Set three measurable gates, kill criteria and governance rights; identify legal questions requiring specialist review."
      ],
      "rubric": [
        "Commercial assumptions are falsifiable and evidenced.",
        "Dilution and cash calculations use correct bases.",
        "Stages limit exposure and have explicit kill criteria.",
        "Governance, conflicts and specialist questions are recognized."
      ]
    },
    "readings": [
      {
        "title": "Economics: production and costs",
        "url": "https://openstax.org/books/principles-economics-3e/pages/1-introduction",
        "task": "Read chapter 7. Distinguish explicit costs, implicit costs and economic profit; apply each to a corporate venture supported by the parent.",
        "minutes": 90
      }
    ]
  },
  "course-05": {
    "status": "authored introductory sequence",
    "description": "Use microeconomic and macroeconomic reasoning to interpret competition, pricing and corporate exposure. Practice with transparent fictional models rather than forecasts presented as facts.",
    "outcomes": [
      "Solve a simple market equilibrium and distinguish shifts from movements.",
      "Estimate elasticity and reason about marginal decisions.",
      "Translate inflation, rates and currency shocks into corporate scenarios."
    ],
    "modules": [
      {
        "id": "course-05-m1",
        "title": "Markets and equilibrium",
        "lessons": [
          {
            "id": "c05-market",
            "title": "Demand, supply and opportunity cost",
            "minutes": 30,
            "body": [
              "Demand describes quantities buyers would purchase at different prices, holding other influences constant. Supply describes quantities sellers would offer. A change in the product’s price moves along a curve; a change in income, preferences, input costs or technology can shift a curve. Confusing a shift with a movement produces faulty causal explanations.",
              "Equilibrium in the simple competitive model is where quantity demanded equals quantity supplied. Solve both equations in the same units and domain. The intersection is a model prediction under assumptions, not an assertion that every real market clears instantly. Contracts, capacity, search and regulation can delay adjustment.",
              "Opportunity cost is the value of the best forgone alternative. An owned warehouse still has an economic cost if it could be leased to another company. Sunk expenditures are different: they cannot be recovered and do not change between future choices. Economic profit subtracts explicit and implicit opportunity costs.",
              "A binding price ceiling below equilibrium creates excess demand in the basic model; a floor above equilibrium creates excess supply. Distributional and dynamic effects need additional analysis. For a corporation, a commodity supply disruption shifts costs and may change both market price and quantity. Identify the affected market before transferring a conclusion to the whole economy."
            ],
            "example": "Demand Qd = 100 − 2P and supply Qs = 20 + 2P. Equate: 100 − 2P = 20 + 2P, so P = 20 and Q = 60. A demand shift to Qd = 120 − 2P gives P = 25 and Q = 70. At a ceiling P = 15 under original curves, Qd = 70 and Qs = 50, a shortage of 20.",
            "transfer": "Solve the original demand with new supply Qs = 2P. Explain the price and quantity change as an adverse supply shift.",
            "tutor": {
              "question": "If input costs rise, is a higher output price a movement or a shift?",
              "hints": [
                "Separate the input market from the output market.",
                "For output producers, higher input cost shifts supply."
              ],
              "response": "The supply curve shifts left/up; equilibrium moves along the unchanged demand curve if other demand influences are held fixed."
            }
          }
        ]
      },
      {
        "id": "course-05-m2",
        "title": "Elasticity and marginal choices",
        "lessons": [
          {
            "id": "c05-elastic",
            "title": "Price sensitivity and market power",
            "minutes": 30,
            "body": [
              "Price elasticity of demand measures percentage quantity response to percentage price change. For discrete comparisons, the midpoint method divides each change by the average of its starting and ending values. Demand elasticity is usually negative; label whether you report the signed value or its absolute magnitude. Elasticity varies by product, horizon and location on a demand curve.",
              "With elastic demand, a small price increase tends to lower revenue; with inelastic demand it tends to raise revenue, other things equal. Profit still depends on costs. Do not infer an optimal price from elasticity alone when competition, capacity and contracts matter. A correlation in historical prices and sales is not a controlled demand experiment.",
              "Marginal analysis compares additional benefit with additional cost. A price-taking firm uses market price as marginal revenue; a firm facing downward-sloping demand generally has marginal revenue below price because selling more may require lowering price. Introductory profit maximization uses MR = MC at an appropriate interior maximum, subject to feasibility and relevant shutdown conditions.",
              "Market power can arise from differentiation, switching costs, networks, scarce assets or legal barriers. Accounting margins alone do not prove durable power. Ask whether substitutes, entry, buyer bargaining or innovation can erode returns. Competitive and regulatory responses belong in the decision case."
            ],
            "example": "Price rises from 10 to 12 and quantity falls from 100 to 80. Midpoint quantity change is −20/90 = −22.22%; midpoint price change is 2/11 = 18.18%; elasticity is −1.22. Revenue falls from 1,000 to 960. If variable cost is 6 per unit, contribution rises from 400 to 480, so revenue and contribution point in different directions.",
            "transfer": "Recompute contribution with unit variable cost 2. Explain why the same demand response can imply a different profit recommendation.",
            "tutor": {
              "question": "Why does falling revenue not prove a price increase failed?",
              "hints": [
                "Calculate contribution after variable cost.",
                "Compare both quantity and margin per unit."
              ],
              "response": "Here fewer units avoid costs while earning a larger contribution each. Profit implications require the cost structure and any fixed-cost change."
            }
          }
        ]
      },
      {
        "id": "course-05-m3",
        "title": "Macroeconomic transmission",
        "lessons": [
          {
            "id": "c05-macro",
            "title": "Inflation, interest rates and currency",
            "minutes": 30,
            "body": [
              "Inflation is a rise in the general price level, not proof that every company can raise every price. Real growth adjusts nominal growth for price changes: real factor = nominal factor divided by price-level factor. For larger changes use the exact ratio rather than simply subtracting rates. Corporate exposure depends on input contracts, pricing power and customer income.",
              "Interest rates affect borrowing costs, asset values, investment hurdles and customer demand. Fixed-rate debt does not reprice immediately, while variable-rate debt and refinancing create transmission channels. A rate shock can coincide with recession or exchange-rate changes; isolate mechanisms before combining them into scenarios.",
              "Currency changes affect translation of foreign financial statements, transactions and competitiveness differently. State the quotation convention. If one foreign-currency unit buys fewer dollars, a foreign sale translates to fewer dollars before hedging or operational offsets. Foreign costs may offset part of the revenue exposure. Translation losses are not automatically equivalent to a cash outflow.",
              "Build a scenario matrix by business unit: revenue volumes, selling prices, input prices, interest exposure and working-capital effects. A macro forecast is uncertain. Use scenario ranges and identify leading indicators, timing and contractual offsets. Do not infer company earnings directly from a single GDP statistic."
            ],
            "example": "Nominal sales rise 8% while relevant prices rise 5%; approximate real volume/value growth under this simple deflator is 1.08/1.05 − 1 = 2.86%. Floating debt of 400 million exposed to a 2-percentage-point rate rise adds 8 million annual interest before offsets. Foreign sales of 100 million units translate from 120 to 110 million dollars if the rate falls from $1.20 to $1.10 per unit.",
            "transfer": "Construct a recession scenario for an exporter with local costs and foreign revenues. Identify at least one offset and one lag.",
            "tutor": {
              "question": "Can high inflation always improve a company’s nominal profits?",
              "hints": [
                "Compare selling-price changes with input costs and volume.",
                "Consider fixed versus floating debt and customer demand."
              ],
              "response": "No. Costs may rise faster, volumes may fall and borrowing costs may increase. Contract timing and pricing power determine the result."
            }
          }
        ]
      }
    ],
    "practice": {
      "minutes": 45,
      "instructions": "Work independently on paper first. Record units, equations and assumptions; then select your answers. Review explanations and redo missed calculations without copying.",
      "questions": [
        {
          "id": "p1",
          "prompt": "Qd=100−2P, Qs=20+2P. Equilibrium price?",
          "options": [
            "10",
            "20",
            "25",
            "40"
          ],
          "correct": 1,
          "explanation": "100−2P=20+2P gives 4P=80."
        },
        {
          "id": "p2",
          "prompt": "Under those curves, ceiling P=15 creates shortage:",
          "options": [
            "0",
            "10",
            "20",
            "70"
          ],
          "correct": 2,
          "explanation": "Qd=70, Qs=50, excess demand=20."
        },
        {
          "id": "p3",
          "prompt": "Price 10→12, quantity 100→80. Midpoint elasticity approximately?",
          "options": [
            "−1.22",
            "−1.00",
            "+1.22",
            "−0.82"
          ],
          "correct": 0,
          "explanation": "(−20/90)/(2/11)=−1.22."
        },
        {
          "id": "p4",
          "prompt": "Nominal growth 8%, price growth 5%. Exact real growth?",
          "options": [
            "3.00%",
            "13%",
            "2.50%",
            "2.86%"
          ],
          "correct": 3,
          "explanation": "1.08/1.05−1=2.857%."
        },
        {
          "id": "p5",
          "prompt": "Floating debt 400 million, rate rise 2 percentage points. Added annual interest?",
          "options": [
            "2 million",
            "8 million",
            "80 million",
            "400 million"
          ],
          "correct": 1,
          "explanation": "400×.02=8 million."
        },
        {
          "id": "p6",
          "prompt": "Owned space can be rented externally. Its forgone rent is:",
          "options": [
            "A sunk cost",
            "No cost",
            "An opportunity cost",
            "Revenue already earned"
          ],
          "correct": 2,
          "explanation": "The best alternative use has economic value."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "Qd=120−2P, Qs=20+2P. Equilibrium quantity?",
          "options": [
            "25",
            "50",
            "60",
            "70"
          ],
          "correct": 3,
          "explanation": "P=25; Q=20+50=70."
        },
        {
          "id": "e2",
          "prompt": "Higher input cost, unchanged demand: basic competitive prediction?",
          "options": [
            "Price falls, quantity rises",
            "Price rises, quantity falls",
            "Both rise",
            "Both unchanged"
          ],
          "correct": 1,
          "explanation": "An adverse supply shift raises price and lowers quantity."
        },
        {
          "id": "e3",
          "prompt": "Nominal revenue rises 10%, relevant prices 10%. Simple real growth?",
          "options": [
            "10%",
            "20%",
            "0%",
            "−10%"
          ],
          "correct": 2,
          "explanation": "1.10/1.10−1=0."
        },
        {
          "id": "e4",
          "prompt": "100 million foreign units at $1.10 each translates to:",
          "options": [
            "110 million dollars",
            "90 million dollars",
            "100 million dollars",
            "10 million dollars"
          ],
          "correct": 0,
          "explanation": "100×1.10=110."
        },
        {
          "id": "e5",
          "prompt": "A 2-point market rate rise immediately affects which exposure most directly?",
          "options": [
            "Already paid costs",
            "All fixed-rate debt identically",
            "Retained earnings",
            "Unhedged floating-rate debt"
          ],
          "correct": 3,
          "explanation": "Floating rates generally reset under the contract, while fixed rates wait for refinancing or other events."
        }
      ],
      "written": "A multinational has floating debt 400 million, foreign annual revenue 100 million currency units and local costs in dollars. Model a 2-point rate rise and exchange-rate change from $1.20 to $1.10. In 500–700 words quantify the isolated interest and translation effects, distinguish them from a full earnings forecast and propose two operational or financial responses with tradeoffs.",
      "model": "Annual interest rises 8 million if fully exposed for the year. Foreign revenue translates to 110 instead of 120 million dollars, a 10 million decline before volume, pricing, hedges and foreign costs. These isolated effects cannot simply stand in for net-income change: taxes, timing, accounting and commercial responses matter. Responses might include matching foreign costs or hedging contracted exposures, each with costs and limits.",
      "rubric": [
        "Equations and quotation conventions are correct.",
        "Causal mechanisms distinguish shifts and exposures.",
        "Evidence and scenario assumptions are separated.",
        "Actions address downside, offsets and uncertainty."
      ]
    },
    "portfolio": {
      "title": "Macroeconomic exposure report",
      "prompt": "Prepare a 1,000-word report for a large public corporation using a dated annual report, plus a fictional adverse macro scenario clearly labeled as such.",
      "minutes": 180,
      "requirements": [
        "Cite segment, debt and currency exposure source sections.",
        "Map demand, input-cost, interest and currency transmission by unit.",
        "Calculate one market equilibrium and two financial exposure sensitivities using disclosed or explicitly assumed data.",
        "Recommend actions, indicators and limits; distinguish scenario assumptions from company facts."
      ],
      "rubric": [
        "Equations and quotation conventions are correct.",
        "Causal mechanisms distinguish shifts and exposures.",
        "Evidence and scenario assumptions are separated.",
        "Actions address downside, offsets and uncertainty."
      ]
    },
    "readings": [
      {
        "title": "Principles of Economics 3e: markets and elasticity",
        "url": "https://openstax.org/books/principles-economics-3e/pages/1-introduction",
        "task": "Read chapters 3 and 5. Solve one end-of-chapter equilibrium problem and one elasticity problem on paper, then explain which model assumptions a corporate pricing committee should challenge.",
        "minutes": 120
      }
    ]
  },
  "course-06": {
    "status": "authored introductory sequence",
    "description": "Read corporate financial disclosures for liquidity, leverage and cash generation. This is analytical education using fictional data, not personalized investment advice.",
    "outcomes": [
      "Connect the three primary financial statements.",
      "Calculate liquidity and debt-coverage measures with defined conventions.",
      "Identify earnings-quality warnings and disclosure limitations."
    ],
    "modules": [
      {
        "id": "course-06-m1",
        "title": "Statement connections",
        "lessons": [
          {
            "id": "c06-statements",
            "title": "Profit, resources and cash",
            "minutes": 30,
            "body": [
              "The income statement measures revenue and expenses over a period. The balance sheet records assets, liabilities and equity at a date, with assets = liabilities + equity. The cash-flow statement explains the change in cash over a period through operating, investing and financing activities. Compare matching dates and scopes, including whether results are consolidated.",
              "Accrual accounting recognizes economic activity under accounting rules rather than simply recording cash receipts and payments. A credit sale can create revenue and a receivable before collection. Buying inventory exchanges cash for an asset until the inventory is sold or otherwise expensed. Borrowing adds cash and debt without creating revenue.",
              "Net income can increase retained earnings, but dividends and other equity changes also matter. Cash flow is not necessarily net income plus depreciation: changes in working capital and other adjustments can be material. A cash increase funded by new debt does not establish operating strength.",
              "Ratios are starting points for questions. Current ratio compares current assets with current liabilities; quick ratio commonly excludes inventory and other less liquid current assets. An apparently strong current ratio can conceal obsolete inventory or doubtful receivables. Inspect asset composition, maturities, restrictions and footnotes before drawing a liquidity conclusion."
            ],
            "example": "A company has cash 40, receivables 60, inventory 100 and current liabilities 100. Current ratio = 200/100 = 2.0. Using cash plus receivables only, quick ratio = 100/100 = 1.0. If 30 of receivables are doubtful, the unadjusted ratios overstate usable liquidity.",
            "transfer": "Classify a credit sale, inventory purchase and bank borrowing across statements. Explain which transactions change profit immediately under the simplified assumptions.",
            "tutor": {
              "question": "Why might a 2.0 current ratio fail to protect payroll?",
              "hints": [
                "Inspect what current assets contain.",
                "Compare payment due dates with collection and inventory timing."
              ],
              "response": "Assets may not convert to unrestricted cash before obligations mature. The ratio does not measure exact cash timing or asset quality."
            }
          }
        ]
      },
      {
        "id": "course-06-m2",
        "title": "Liquidity and leverage",
        "lessons": [
          {
            "id": "c06-debt",
            "title": "Debt capacity and refinancing",
            "minutes": 30,
            "body": [
              "Debt creates contractual obligations, often with covenants and maturity dates. Leverage can amplify equity returns and losses, but a single ratio cannot establish safety. Net debt is commonly interest-bearing debt less eligible cash; define treatment of restricted cash, leases and other obligations. Different analysts may use different definitions.",
              "Interest coverage can be defined as EBIT divided by interest expense. EBITDA coverage may look stronger but does not pay for capital expenditure, taxes or working capital. Compare cash interest, scheduled principal, maturities and minimum liquidity rather than treating EBITDA as freely available cash.",
              "A maturity wall can make a solvent-looking company vulnerable to refinancing conditions. Fixed-rate borrowing limits near-term repricing but may still face higher rates when refinanced. Undrawn facilities can help only if committed, available and covenant-compliant. An uncommitted intention to lend is not cash.",
              "Stress testing should connect operating decline with financing effects. A sales slowdown can reduce profit and increase receivable days while a covenant breach restricts borrowing. Independent sensitivities may understate a combined crisis. A board should monitor headroom and escalation triggers before a payment failure."
            ],
            "example": "Debt 300, eligible cash 50, EBITDA 100 gives net debt 250 and net-debt/EBITDA 2.5×. EBIT 60 and interest 15 give coverage 4×. If EBIT falls to 30 and interest rises to 20, coverage falls to 1.5×. Neither ratio shows whether a 100 debt maturity next month can be paid.",
            "transfer": "Create a liquidity table with opening cash, operating receipts, payments, capex, debt service and minimum reserve. Explain the difference between committed and assumed refinancing.",
            "tutor": {
              "question": "Why does net-debt/EBITDA miss some near-term risk?",
              "hints": [
                "Look for timing and cash restrictions.",
                "Add maturity schedule, cash conversion and committed funding."
              ],
              "response": "The ratio is not a cash calendar. It may hide restricted cash, investment needs, covenant conditions and imminent principal repayments."
            }
          }
        ]
      },
      {
        "id": "course-06-m3",
        "title": "Disclosure and earnings quality",
        "lessons": [
          {
            "id": "c06-quality",
            "title": "Read beyond the headline",
            "minutes": 30,
            "body": [
              "Begin a disclosure review with the reporting period, currency, accounting framework and audit status. Read the primary statements alongside notes, segment disclosures, accounting policies and management discussion. An adjusted metric should be reconciled to the reported measure, with a clear definition and reason for adjustments.",
              "Look for divergence between earnings and cash, unusually fast receivables growth, repeated “one-time” exclusions, changes in estimates and dependence on financing. These are questions for investigation, not proof of misconduct. Acquisitions, seasonality and deliberate inventory investment can create legitimate divergences.",
              "Assess comparability. A change in accounting scope, acquired business or fiscal calendar can affect apparent growth. Separate organic change from structural change where data permit. Do not silently compare a quarterly flow with an annual flow or a year-end balance with an average balance.",
              "A useful disclosure review identifies what is known, what is estimated and what cannot be concluded from public information. Cite sections and preserve calculation trails. A recommendation should be conditional when crucial details are missing; avoid treating a summary ratio as a substitute for notes and contracts."
            ],
            "example": "Revenue grows 10% while receivables grow 40%. This may indicate slower collections, acquisition effects, mix or timing. If net income is 70 but operating cash flow 20 and capex 35, simple free cash flow is −15. Request a working-capital bridge and explanation of material adjustments before judging performance.",
            "transfer": "Draft five questions for a CFO whose adjusted profit rises while operating cash flow falls. Include one benign explanation you would test.",
            "tutor": {
              "question": "Does earnings/cash divergence prove manipulation?",
              "hints": [
                "List legitimate timing and scope explanations.",
                "Request a reconciliation and consistent-period comparison."
              ],
              "response": "No. It is a signal to investigate working capital, noncash items, acquisition effects and estimates. Evidence is needed before alleging wrongdoing."
            }
          }
        ]
      }
    ],
    "practice": {
      "minutes": 45,
      "instructions": "Work independently on paper first. Record units, equations and assumptions; then select your answers. Review explanations and redo missed calculations without copying.",
      "questions": [
        {
          "id": "p1",
          "prompt": "Assets 500, liabilities 320. Equity?",
          "options": [
            "820",
            "320",
            "180",
            "500"
          ],
          "correct": 2,
          "explanation": "Assets=liabilities+equity; 500−320=180."
        },
        {
          "id": "p2",
          "prompt": "Cash 40, receivables 60, inventory 100, current liabilities 100. Current ratio?",
          "options": [
            "1×",
            "2×",
            ".5×",
            "4×"
          ],
          "correct": 1,
          "explanation": "(40+60+100)/100=2."
        },
        {
          "id": "p3",
          "prompt": "Using only cash and receivables, quick ratio in the same case?",
          "options": [
            "1×",
            "2×",
            "1.6×",
            ".4×"
          ],
          "correct": 0,
          "explanation": "(40+60)/100=1."
        },
        {
          "id": "p4",
          "prompt": "Debt 300, eligible cash 50, EBITDA 100. Net leverage?",
          "options": [
            "3×",
            ".5×",
            "3.5×",
            "2.5×"
          ],
          "correct": 3,
          "explanation": "(300−50)/100=2.5."
        },
        {
          "id": "p5",
          "prompt": "EBIT 30, interest 20. Coverage?",
          "options": [
            ".67×",
            "1.5×",
            "2×",
            "10×"
          ],
          "correct": 1,
          "explanation": "30/20=1.5."
        },
        {
          "id": "p6",
          "prompt": "Operating cash flow 20, capex 35. Simple FCF?",
          "options": [
            "55",
            "15",
            "−15",
            "20"
          ],
          "correct": 2,
          "explanation": "20−35=−15."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "Borrowing 100 cash from a bank immediately creates:",
          "options": [
            "Revenue 100",
            "Profit 100",
            "Cash and debt each +100",
            "Equity +100"
          ],
          "correct": 2,
          "explanation": "Financing raises cash and a liability, not revenue."
        },
        {
          "id": "e2",
          "prompt": "Debt 480, eligible cash 80, EBITDA 160. Net leverage?",
          "options": [
            "3×",
            "2.5×",
            "4×",
            ".5×"
          ],
          "correct": 1,
          "explanation": "(480−80)/160=2.5."
        },
        {
          "id": "e3",
          "prompt": "EBIT 90 and interest 30. Interest coverage?",
          "options": [
            "3×",
            "2×",
            ".33×",
            "120×"
          ],
          "correct": 0,
          "explanation": "90/30=3."
        },
        {
          "id": "e4",
          "prompt": "Receivables grow faster than sales. Defensible conclusion?",
          "options": [
            "Fraud is certain",
            "Profit must be false",
            "No further work needed",
            "Investigate timing, scope and collections"
          ],
          "correct": 3,
          "explanation": "The divergence has multiple possible explanations."
        },
        {
          "id": "e5",
          "prompt": "A debt maturity next month is best evaluated using:",
          "options": [
            "The logo",
            "Revenue growth alone",
            "A cash calendar and committed liquidity",
            "EBITDA alone"
          ],
          "correct": 2,
          "explanation": "Timing and availability of cash determine payment capacity."
        }
      ],
      "written": "A corporation reports assets 900, liabilities 600, debt 480, eligible cash 80, EBITDA 160, EBIT 90, interest 30, operating cash flow 70 and capex 100. A 120 debt maturity is due next quarter. In 500–700 words calculate equity, net leverage, coverage and free cash flow; explain why these do not establish repayment capacity; list evidence needed for a funding recommendation.",
      "model": "Equity 300; net leverage 2.5×; EBIT coverage 3×; simple free cash flow −30. EBITDA and book equity are not cash. Compare unrestricted cash and forecast receipts/payments with the 120 maturity, capex commitments, reserve needs, covenant headroom and committed facilities. Do not assume an annual flow is fully available next quarter.",
      "rubric": [
        "Statement links and ratio definitions are correct.",
        "Sources, periods and adjustments are traceable.",
        "Cash timing and leverage risks are evaluated.",
        "Conclusions distinguish warning signs from proof."
      ]
    },
    "portfolio": {
      "title": "Annual-report financial disclosure review",
      "prompt": "Use one dated annual report for a large corporation. Produce a 1,000-word analysis with a reproducible calculation appendix.",
      "minutes": 180,
      "requirements": [
        "Cite statement pages, debt notes, segment notes and metric reconciliations.",
        "Calculate liquidity, net leverage, interest coverage and defined free cash flow; disclose unavailable data.",
        "Compare two years and explain changes without mixing periods or definitions.",
        "Write a conditional liquidity recommendation with a maturity table, questions for management and limitations."
      ],
      "rubric": [
        "Statement links and ratio definitions are correct.",
        "Sources, periods and adjustments are traceable.",
        "Cash timing and leverage risks are evaluated.",
        "Conclusions distinguish warning signs from proof."
      ]
    },
    "readings": [
      {
        "title": "Financial accounting: statement analysis",
        "url": "https://openstax.org/books/principles-financial-accounting/pages/1-why-it-matters",
        "task": "Read chapter 2 and chapter 16 on financial statement analysis. Reproduce two ratios with source numerators and denominators, then explain one limitation for each.",
        "minutes": 90
      }
    ]
  }
});
