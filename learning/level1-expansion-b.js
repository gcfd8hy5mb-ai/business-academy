/* Level 1 academic expansion, batch B: original fictional cases and distinct evidence IDs. */
(function(){const patches={
  "course-04": {
    "modules": [
      {
        "id": "course-04-m4",
        "title": "Stage gates as real options",
        "lessons": [
          {
            "id": "c04-option",
            "title": "Stage gates as real options",
            "minutes": 35,
            "body": [
              "A corporate venture often has the option to expand after learning, defer after weak signals or abandon before a full commitment. This flexibility is valuable when uncertainty is resolved over time and investment is difficult to reverse. A stage gate is a decision contract: specify what is measured, the threshold, spending authority and what happens if evidence falls short.",
              "Do not count the full favorable payoff as if the pilot guarantees success. The value of a pilot is the expected improvement in decisions after observing imperfect information, minus the pilot cost, delay and operational distraction. Compare with launching immediately and rejecting the venture. Data from a captive internal user may overstate external willingness to pay.",
              "The option disappears if the firm has already signed binding contracts, built an irreversible plant or must commit to suppliers before the signal arrives. Similarly, competitors may move while the company waits. Model both timing and the cost of keeping the option open. A board can approve a ceiling while delegating individual gate releases to management."
            ],
            "example": "A venture pilot costs 2 million now. Without a pilot, launch costs 20 and delivers net value after launch of +40 in a high-demand state (40%) or −10 in a low-demand state (60%): immediate expected net value is 10. With a perfect pilot, launch only when high yields .4×40−2=14, an improvement of 4; no imperfect pilot can be worth more than that before delay.",
            "transfer": "Test a signal that is 75% positive in high demand and 20% positive in low demand. Determine the launch decision after each signal and maximum pilot cost.",
            "tutor": {
              "question": "Test a signal that is 75% positive in high demand and 20% positive in low demand. Determine the launch decision after each signal and maximum pilot cost.",
              "hints": [
                "Positive signal probability=.4×.75+.6×.20=.42; posterior high=.30/.42=.7143.",
                "Expected net launch value after positive=.7143×40+.2857×(−10)=25.71, so launch."
              ],
              "response": "Before pilot cost, expected conditional value=.42×25.71=10.8; compared with immediate 10, an imperfect pilot is worth at most .8, not the 4 from perfect information.",
              "steps": [
                "Positive signal probability=.4×.75+.6×.20=.42; posterior high=.30/.42=.7143.",
                "Expected net launch value after positive=.7143×40+.2857×(−10)=25.71, so launch.",
                "Negative signal posterior high=.10/.58=.1724; launch value=.1724×40+.8276×(−10)=−1.38, so stop.",
                "Before pilot cost, expected conditional value=.42×25.71=10.8; compared with immediate 10, an imperfect pilot is worth at most .8, not the 4 from perfect information."
              ]
            }
          }
        ]
      },
      {
        "id": "course-04-m5",
        "title": "Equity dilution and liquidation preference",
        "lessons": [
          {
            "id": "c04-preference",
            "title": "Equity dilution and liquidation preference",
            "minutes": 35,
            "body": [
              "Headline valuation is incomplete without a capitalization table and security terms. In a simple round, post-money value equals pre-money value plus new cash, and new investor ownership equals cash invested divided by post-money value. When the investor receives a nonparticipating 1× liquidation preference, they can usually choose between return of invested capital and conversion to their ordinary ownership share, subject to actual contract terms.",
              "Preference can shift distribution in a downside exit without changing the common-stock headline percentage. Model a range of exit proceeds after senior liabilities rather than treating an enterprise sale price as distributable equity. More complex participating, cumulative or senior rights alter the waterfall; use the governing documents for real transactions.",
              "Option-pool increases may dilute founders before or after financing depending on the negotiated pre-money convention. A price quoted before expansion of a pool is not comparable to one after expansion. The board should demand a fully diluted cap table, common and preferred payouts by scenario, board-control terms and a cash-runway plan."
            ],
            "example": "Pre-money value 12 million, investor contributes 3, simple post-money 15 and ownership 20%. With nonparticipating 1× preference, at distributable exit proceeds 5 the investor chooses max(3,20%×5=1)=3; existing holders get 2. At proceeds 30, investor converts for 6; existing holders get 24. The preference and common conversion values cross at exit proceeds 15.",
            "transfer": "Calculate the investor and founder payout at exits 10 and 20, then explain why the option pool can change fully diluted ownership.",
            "tutor": {
              "question": "Calculate the investor and founder payout at exits 10 and 20, then explain why the option pool can change fully diluted ownership.",
              "hints": [
                "At exit 10, investor receives max(3,2)=3 and existing holders 7.",
                "At exit 20, investor receives max(3,4)=4 and others 16."
              ],
              "response": "An expanded employee pool creates additional claims; determine whether it is included before or after calculating investor price per share.",
              "steps": [
                "At exit 10, investor receives max(3,2)=3 and existing holders 7.",
                "At exit 20, investor receives max(3,4)=4 and others 16.",
                "The conversion threshold is 3/.20=15 in proceeds after senior claims.",
                "An expanded employee pool creates additional claims; determine whether it is included before or after calculating investor price per share."
              ]
            }
          }
        ]
      },
      {
        "id": "course-04-m6",
        "title": "From pilot economics to a scalable operating system",
        "lessons": [
          {
            "id": "c04-scaling",
            "title": "From pilot economics to a scalable operating system",
            "minutes": 35,
            "body": [
              "A successful pilot proves only the conditions tested. At scale, acquisition cost, service reliability, security, compliance and support load may differ. Estimate contribution after variable delivery, support and sales costs; identify capacity steps and shared corporate subsidies. A good growth plan states a cohort retention measure and payback period alongside a revenue forecast.",
              "For a subscription product, annual revenue from new contracts is not equal to collected cash, and a multiyear contract is not all recognized at signing. Renewal and expansion depend on customer value after implementation. A cohort table follows customers from acquisition to renewal, separating gross retention from new bookings. Do not use early adopter conversion to infer mainstream adoption without testing different buyer groups.",
              "Build three independent gates: paid external demand, unit economics and operational readiness. A gate should include data quality, sample, owner, maximum spend and a stop rule. A parent-company distribution advantage has an opportunity cost; its transfer charge should be visible when evaluating the venture on a stand-alone basis."
            ],
            "example": "A pilot signs 40 paying accounts at 50,000 annual contract value, a 2 million annualized run rate. Variable service/support is 18,000 each; contribution is 32,000 per account before acquisition, development and shared costs. Acquiring each account costs 48,000: simple contribution payback is 1.5 years if renewal, collections and margins persist. A 70% first renewal rate would materially change the expected value.",
            "transfer": "Set a gate requiring evidence of renewal economics by cohort and propose a test for enterprise security readiness before signing a national account.",
            "tutor": {
              "question": "Set a gate requiring evidence of renewal economics by cohort and propose a test for enterprise security readiness before signing a national account.",
              "hints": [
                "Separate 40×50,000 bookings/run rate from cash received and recognized revenue.",
                "Contribution per account is 50,000−18,000=32,000 per year."
              ],
              "response": "Inspect cohort renewal and security controls; a 70% renewal rate may leave acquisition cost unrecovered for many accounts.",
              "steps": [
                "Separate 40×50,000 bookings/run rate from cash received and recognized revenue.",
                "Contribution per account is 50,000−18,000=32,000 per year.",
                "Acquisition payback is 48,000/32,000=1.5 years before fixed cost and churn.",
                "Inspect cohort renewal and security controls; a 70% renewal rate may leave acquisition cost unrecovered for many accounts."
              ]
            }
          }
        ]
      }
    ],
    "applications": [
      {
        "id": "c04-a1",
        "title": "Pilot option value under an imperfect signal",
        "prompt": "A venture launch has net value +40 million if demand is high (40%) and −10 if low (60%). A pilot reports positive with 75% sensitivity and 80% specificity. Compare launch now, a signal-contingent launch, and no launch before pilot cost.",
        "requirements": [
          "Show the base expected launch value and perfect-information bound.",
          "Compute signal probabilities and posteriors.",
          "Decide after each signal, then derive maximum pilot cost.",
          "Challenge delay, test sample and reversibility assumptions."
        ],
        "solution": [
          "Launch now EV=.4×40+.6×(−10)=10. Perfect knowledge would launch only high, yielding 16; EVPI=6. The pilot cost is assessed only after calculating the value of its conditional decision.",
          "Positive probability .42; expected launch given positive is 25.714. Negative probability .58; expected launch given negative is −1.379, so do not launch after negative. Expected signal-contingent value=.42×25.714=10.8 before pilot cost.",
          "Incremental value of an imperfect pilot is .8, so a 2 pilot would destroy 1.2 of value relative to launching now. Delay and sample bias reduce the case further."
        ],
        "minutes": 60,
        "rubric": [
          "All calculations reconcile with labeled units and periods.",
          "A causal or economic interpretation follows the calculations.",
          "Alternative assumptions and downside effects are analyzed.",
          "The decision states evidence limits and a monitorable trigger."
        ]
      },
      {
        "id": "c04-a2",
        "title": "Term-sheet waterfall and control",
        "prompt": "A corporate venture has pre-money 12 million and receives 3 million for 20% fully diluted ownership under an explicitly simplified capitalization. Investor holds nonparticipating 1× preference. Compare exits at equity proceeds of 5, 10, 20 and 30 million.",
        "requirements": [
          "Calculate the investor choice and other holders’ payout at each exit.",
          "Find the preference/conversion crossover.",
          "Explain how debt, option pools or senior claims alter the model.",
          "Recommend a board information request before selecting the investor."
        ],
        "solution": [
          "At 5, investor takes 3 and others 2. At 10, investor takes 3 and others 7. At 20, investor converts for 4 and others 16. At 30, investor converts for 6 and others 24.",
          "Conversion overtakes the 3 preference when proceeds exceed 15. Equity proceeds must already be after senior debt and transaction costs.",
          "Request fully diluted pre/post cap tables, option-pool placement, liquidation seniority, board rights, covenants and funding runway. Real contracts may differ."
        ],
        "minutes": 60,
        "rubric": [
          "All calculations reconcile with labeled units and periods.",
          "A causal or economic interpretation follows the calculations.",
          "Alternative assumptions and downside effects are analyzed.",
          "The decision states evidence limits and a monitorable trigger."
        ]
      }
    ],
    "advancedExam": {
      "minutes": 120,
      "instructions": "Independent four-part executive exam. Solve on paper and select every answer before submitting; then write the case analysis before opening the model. No external grading or proctoring.",
      "questions": [
        {
          "id": "a4e1",
          "prompt": "High state +40 at 40%, low −10 at 60%. Expected value of launching now?",
          "options": [
            "10",
            "16",
            "4",
            "−2"
          ],
          "correct": 0,
          "explanation": ".4×40+.6×(−10)=10. Compare with no launch at zero.",
          "remediation": "Multiply state-contingent net values by their probabilities; do not subtract pilot cost unless a pilot occurs.",
          "lessonId": "c04-option"
        },
        {
          "id": "a4e2",
          "prompt": "A pilot detects high demand 75% of the time; false positive rate 20%, prior high 40%. Probability of positive?",
          "options": [
            "30%",
            "42%",
            "58%",
            "75%"
          ],
          "correct": 1,
          "explanation": ".4×.75+.6×.20=.42. Sensitivity is not the overall positive-signal probability.",
          "remediation": "Construct the two branches leading to a positive signal before applying Bayes.",
          "lessonId": "c04-option"
        },
        {
          "id": "a4e3",
          "prompt": "New investor contributes 3 at pre-money 12; simple post-money ownership?",
          "options": [
            "25%",
            "15%",
            "20%",
            "80%"
          ],
          "correct": 2,
          "explanation": "Post-money is 15, so 3/15=20%.",
          "remediation": "Use cash divided by post-money value, then inspect fully diluted options separately.",
          "lessonId": "c04-preference"
        },
        {
          "id": "a4e4",
          "prompt": "At equity exit proceeds 10, 20% ownership and nonparticipating 1× preference of 3, investor gets:",
          "options": [
            "2",
            "10",
            "4",
            "3"
          ],
          "correct": 3,
          "explanation": "The investor chooses max(3,20%×10=2)=3; other holders get 7.",
          "remediation": "Apply the preference to equity proceeds after senior claims before comparing conversion.",
          "lessonId": "c04-preference"
        }
      ],
      "written": "A corporate parent considers funding a venture with a 2 million pilot or immediate launch; high-demand launch payoff is +40 at 40%, low-demand −10 at 60%, and pilot sensitivity/specificity are 75%/80%. A 3 million investor would take 20% with a nonparticipating 1× preference. In 800–1,000 words, calculate the pilot’s decision value, assess the proposed pilot cost, model exits at 5 and 20, and propose governance gates.",
      "model": "Launch now EV=10. Conditional pilot strategy EV=10.8 before pilot cost; paying 2 reduces this to 8.8, inferior to launch now on stated values. The 3 preference yields investor 3 at exit 5 (others 2); at exit 20 conversion yields 4 (others 16). Board approval should require external paid demand, unit economics and security gates, plus a fully diluted cap table. Funding constraints can alter the recommendation.",
      "rubric": [
        "Correct quantitative work with a reproducible bridge.",
        "Clear separation of disclosed facts, assumptions and inference.",
        "At least two credible alternatives and a downside scenario.",
        "A defensible recommendation, owner and reversal trigger."
      ]
    },
    "portfolioExtension": {
      "title": "Corporate venture investment and term-sheet dossier",
      "prompt": "Prepare a 1,200–1,600 word investment committee pack for a corporate new venture. Base any real-company context on a dated public filing; the proposed venture assumptions must be explicitly fictional.",
      "requirements": [
        "Model three funding stages with committed versus contingent cash and a testable kill rule.",
        "Provide a bottom-up cohort acquisition/renewal model and unit contribution after delivery and acquisition cost.",
        "Build a fully diluted cap table and a two-scenario liquidation waterfall under stated preference terms.",
        "Compare immediate launch, a pilot and partnership with expected values, option cost and operating-control risks."
      ],
      "minutes": 180,
      "rubric": [
        "Dated and traceable sources, with facts separated from assumptions.",
        "An auditable quantitative analysis with consistent definitions.",
        "A serious counterargument and scenario challenge.",
        "A board-ready recommendation with decision rights and monitoring."
      ]
    },
    "readings": [
      {
        "title": "Stanford Technology Ventures Program: Acting on Customer Discovery",
        "url": "https://stvp.stanford.edu/av/acting-customer-discovery",
        "task": "Watch the public STVP talk as a supplemental lecture resource, not a Stanford degree course. Write a falsifiable interview protocol and compare responses from external buyers with a corporate parent’s internal pilot users.",
        "minutes": 90
      }
    ],
    "status": "authored expanded sequence"
  },
  "course-05": {
    "modules": [
      {
        "id": "course-05-m4",
        "title": "Elasticity, marginal revenue and pricing",
        "lessons": [
          {
            "id": "c05-optprice",
            "title": "Elasticity, marginal revenue and pricing",
            "minutes": 35,
            "body": [
              "When a firm faces downward-sloping demand, selling an additional unit can require lowering price on existing units. For linear inverse demand P=a−bQ with constant marginal cost c, total revenue is aQ−bQ² and marginal revenue is a−2bQ. The interior profit maximum sets marginal revenue equal to marginal cost when a>c, capacity permits and the second-order shape is appropriate.",
              "This is a model, not a prescription to maximize price. Contracts, competitive responses, quality, product interactions and regulation can invalidate the simple demand curve. Evidence on demand often comes from controlled tests or natural variation, not from a single before/after observation with changing macro conditions.",
              "Price elasticity varies along a linear demand curve. At the interior monopoly optimum with constant marginal cost, the absolute elasticity exceeds one when marginal cost is positive under the standard model. A high margin does not establish market power without substitutes and entry analysis. A board decision should include customer welfare, reputation and long-run incentives as well as a one-period profit calculation."
            ],
            "example": "Fictional inverse demand P=100−Q, Q measured in thousands and price in dollars; unit marginal cost 20 and fixed cost 1,000 thousand dollars. Revenue in thousands is 100Q−Q²; MR=100−2Q. MR=MC=20 gives Q=40 thousand and P=60; contribution before fixed cost is (60−20)×40=1,600 thousand; profit=600 thousand. At Q=50, P=50, profit is 500 thousand.",
            "transfer": "Find revenue-maximizing quantity and compare it with profit-maximizing quantity. Explain why a revenue bonus could distort the decision.",
            "tutor": {
              "question": "Find revenue-maximizing quantity and compare it with profit-maximizing quantity. Explain why a revenue bonus could distort the decision.",
              "hints": [
                "For revenue, set MR=0: 100−2Q=0, so Q=50 and price=50.",
                "At Q=50 contribution is (50−20)×50=1,500 thousand, versus 1,600 at Q=40."
              ],
              "response": "A revenue incentive ignores the extra cost and lost price on existing units.",
              "steps": [
                "For revenue, set MR=0: 100−2Q=0, so Q=50 and price=50.",
                "At Q=50 contribution is (50−20)×50=1,500 thousand, versus 1,600 at Q=40.",
                "Fixed cost cancels between the two comparisons, so profit falls by 100 thousand at the revenue maximum.",
                "A revenue incentive ignores the extra cost and lost price on existing units."
              ]
            }
          }
        ]
      },
      {
        "id": "course-05-m5",
        "title": "Strategic commitments and sequential competition",
        "lessons": [
          {
            "id": "c05-game",
            "title": "Strategic commitments and sequential competition",
            "minutes": 35,
            "body": [
              "A game model identifies players, available actions, payoffs and information. A dominant strategy yields a higher payoff regardless of the rival’s action; a Nash equilibrium is a pair where neither player gains by changing alone. Those concepts differ. One observed outcome does not establish a durable equilibrium if payoffs or information change.",
              "Sequential games require backward induction. If a rival promises to match every discount, ask whether matching is optimal after a discount is actually observed. An incredible threat cannot discipline the first mover in a rational model. Capacity investments, contracts or public commitments may change incentives, but can also be costly or legally restricted.",
              "A pricing committee should map at least two rival responses and customer-switching assumptions. A small static payoff table can teach strategic thinking but cannot predict a real industry without evidence on entry, costs, contracts and regulation. For real firms, seek qualified competition-law review before any coordinated behavior or information exchange."
            ],
            "example": "Two firms choose Hold or Cut. Payoffs (A,B): Hold/Hold=(8,8); Cut/Hold=(11,3); Hold/Cut=(3,11); Cut/Cut=(5,5). Each firm prefers Cut against either rival choice, so Cut/Cut is the unique dominant-strategy Nash equilibrium, even though both would earn 8 from Hold/Hold. This table is fictional and is not permission to coordinate prices.",
            "transfer": "Change Cut/Cut payoffs to (2,2). Identify whether Cut is still dominant and what additional information would be needed to predict behavior in a repeated market.",
            "tutor": {
              "question": "Change Cut/Cut payoffs to (2,2). Identify whether Cut is still dominant and what additional information would be needed to predict behavior in a repeated market.",
              "hints": [
                "Against rival Hold, Cut yields 11 versus Hold 8; Cut still wins.",
                "Against rival Cut, Hold yields 3 versus Cut 2; Hold now wins."
              ],
              "response": "Repeated play, capacity and contracts can change effective payoffs. Never infer a collusive remedy.",
              "steps": [
                "Against rival Hold, Cut yields 11 versus Hold 8; Cut still wins.",
                "Against rival Cut, Hold yields 3 versus Cut 2; Hold now wins.",
                "Neither action dominates. Hold/Hold is unstable because each would deviate to Cut, while Cut/Cut is unstable because each would deviate to Hold; the simple pure equilibria are asymmetric Hold/Cut and Cut/Hold.",
                "Repeated play, capacity and contracts can change effective payoffs. Never infer a collusive remedy."
              ]
            }
          }
        ]
      },
      {
        "id": "course-05-m6",
        "title": "Macro shock transmission and pricing power",
        "lessons": [
          {
            "id": "c05-scenario",
            "title": "Macro shock transmission and pricing power",
            "minutes": 35,
            "body": [
              "A macro scenario should connect rates, inflation, currencies and demand through separately documented channels. Nominal revenue growth mixes quantity, price and currency translation. If local-currency unit sales rise, the dollar result can still fall when translation weakens. A firm with imported inputs may have an offsetting cost effect; the net exposure requires matching currencies and contracts.",
              "Fixed-rate debt is protected from immediate repricing but can face a maturity wall. Floating debt may reprice after reset, while a hedge can postpone or reshape the cash effect. Higher discount rates may reduce investment values even before current interest expense changes. State the time horizon and rate convention before adding exposures.",
              "Use a coherent bear case: demand falls, receivable days rise and funding gets more expensive together. Calculate revenue, contribution, interest and cash timing separately. Adding percentage shocks to dollars without a common base is invalid. Decision options include hedging contracted currency cash, changing product mix and staging capital expenditure, each with costs and limits."
            ],
            "example": "A foreign subsidiary sells 100 million units of foreign currency annually, with 60 million units of local costs. Exchange falls from $1.20 to $1.10 per foreign unit: translated revenue falls 10 million dollars, but translated local cost falls 6 million, so pre-tax operating contribution falls 4 million before volume or hedges. Floating debt 200 million dollars resetting +2 percentage points adds 4 million annual interest if fully exposed.",
            "transfer": "Add a 10% foreign-currency sales decline while costs are 80% variable in the short run. Build the revised dollar contribution and distinguish it from cash collection.",
            "tutor": {
              "question": "Add a 10% foreign-currency sales decline while costs are 80% variable in the short run. Build the revised dollar contribution and distinguish it from cash collection.",
              "hints": [
                "New foreign revenue is 90; new local variable cost is 60×[.2+.8×.9]=55.2 in foreign units.",
                "Foreign operating contribution is 34.8 units; at $1.10 this is $38.28 million, versus original 40×$1.20=$48 million."
              ],
              "response": "Actual cash depends on billing currency, settlement timing, receivables, hedges and tax.",
              "steps": [
                "New foreign revenue is 90; new local variable cost is 60×[.2+.8×.9]=55.2 in foreign units.",
                "Foreign operating contribution is 34.8 units; at $1.10 this is $38.28 million, versus original 40×$1.20=$48 million.",
                "The $9.72 million operating contribution drop is separate from $4 million extra annual interest.",
                "Actual cash depends on billing currency, settlement timing, receivables, hedges and tax."
              ]
            }
          }
        ]
      }
    ],
    "applications": [
      {
        "id": "c05-a1",
        "title": "Profit, revenue and strategic response",
        "prompt": "A fictional company faces demand P=100−Q, with Q in thousands, constant unit marginal cost 20 and fixed cost 1,000 thousand dollars. A rival may match price cuts, but the payoff of matching is not yet known.",
        "requirements": [
          "Derive revenue, marginal revenue and the interior profit maximum.",
          "Compute the revenue-maximizing quantity and profits at both quantities.",
          "Explain why an observed price/quantity change does not identify demand elasticity by itself.",
          "Design a rival-response test without sharing sensitive competitive information."
        ],
        "solution": [
          "Total revenue=100Q−Q² (thousand dollars); MR=100−2Q. Set MR=20: Q=40, P=60. Operating profit=(60−20)×40−1000=600 thousand.",
          "Revenue-maximizing Q=50, P=50. Profit=(50−20)×50−1000=500 thousand, 100 thousand lower despite more units and higher revenue.",
          "Changing costs, products, seasonality and competitors can confound an observation. Model rival responses independently; real competitive conduct needs legal review."
        ],
        "minutes": 60,
        "rubric": [
          "All calculations reconcile with labeled units and periods.",
          "A causal or economic interpretation follows the calculations.",
          "Alternative assumptions and downside effects are analyzed.",
          "The decision states evidence limits and a monitorable trigger."
        ]
      },
      {
        "id": "c05-a2",
        "title": "Linked macro and strategy scenario",
        "prompt": "A subsidiary has annual revenue 100 million foreign-currency units and local operating cost 60 million foreign units, 80% variable with sales. Currency moves from $1.20 to $1.10 per foreign unit and unit demand falls 10%. Parent has $200 million floating debt with a 2-point rate reset.",
        "requirements": [
          "Calculate original and stressed dollar operating contribution.",
          "Separate currency translation from demand/variable-cost change and annual interest.",
          "Identify cash-collection and hedge assumptions that the arithmetic leaves out.",
          "Recommend an action with a quantified monitoring threshold."
        ],
        "solution": [
          "Original contribution=(100−60)×1.20=$48m. Stressed local revenue=90, cost=60×(.2+.8×.9)=55.2, contribution=34.8×1.10=$38.28m.",
          "Operating contribution falls $9.72m. Floating debt adds $4m annual interest if reset for a full year. Do not label their sum as net-income change without tax, timing and other segments.",
          "Request hedging terms and local cost/receivable currency. Monitor volume, pricing, DSO and debt reset dates; stage discretionary investment if a funding trigger is crossed."
        ],
        "minutes": 60,
        "rubric": [
          "All calculations reconcile with labeled units and periods.",
          "A causal or economic interpretation follows the calculations.",
          "Alternative assumptions and downside effects are analyzed.",
          "The decision states evidence limits and a monitorable trigger."
        ]
      }
    ],
    "advancedExam": {
      "minutes": 120,
      "instructions": "Independent four-part executive exam. Solve on paper and select every answer before submitting; then write the case analysis before opening the model. No external grading or proctoring.",
      "questions": [
        {
          "id": "a5e1",
          "prompt": "Inverse demand P=100−Q, marginal cost 20. Profit-maximizing interior quantity Q (thousands)?",
          "options": [
            "20",
            "40",
            "50",
            "80"
          ],
          "correct": 1,
          "explanation": "MR=100−2Q; set to 20 gives Q=40. The price is 60.",
          "remediation": "Differentiate total revenue Q(100−Q) and equate marginal revenue to marginal cost.",
          "lessonId": "c05-optprice"
        },
        {
          "id": "a5e2",
          "prompt": "At Q=50 under that demand and cost, fixed cost 1,000 thousand, operating profit?",
          "options": [
            "500 thousand",
            "600 thousand",
            "1,500 thousand",
            "2,500 thousand"
          ],
          "correct": 0,
          "explanation": "P=50, contribution 30×50=1,500 thousand; less fixed 1,000 =500 thousand.",
          "remediation": "Use price from the demand curve, then subtract unit and fixed costs.",
          "lessonId": "c05-optprice"
        },
        {
          "id": "a5e3",
          "prompt": "If Cut/Cut=(2,2), Hold/Hold=(8,8), Cut/Hold=(11,3), Hold/Cut=(3,11), which statement is true?",
          "options": [
            "Cut remains dominant",
            "Hold remains dominant",
            "Only Hold/Hold is Nash",
            "Neither action dominates"
          ],
          "correct": 3,
          "explanation": "Against Hold, Cut wins 11 versus 8. Against Cut, Hold wins 3 versus 2. Neither dominates; asymmetric profiles are pure equilibria.",
          "remediation": "Compare each firm’s action holding the rival action fixed, then check best responses.",
          "lessonId": "c05-game"
        },
        {
          "id": "a5e4",
          "prompt": "Revenue 100 local units, cost 60 local units; exchange $1.20→$1.10, unchanged units. Contribution change?",
          "options": [
            "−$10m",
            "+$6m",
            "−$4m",
            "+$4m"
          ],
          "correct": 2,
          "explanation": "Net local contribution 40 million translates from $48m to $44m, a $4m decrease.",
          "remediation": "Translate both local revenue and local costs before calling the difference an operating exposure.",
          "lessonId": "c05-scenario"
        }
      ],
      "written": "A multinational considers a price cut while a rival may respond. For its subsidiary, local revenue is 100 million foreign units, local cost 60 with 80% variable, FX falls $1.20→$1.10 and volume falls 10%; $200 million floating debt reprices +2 points. In 800–1,000 words calculate profit-maximizing Q for P=100−Q, build a competitor game, calculate the linked currency/volume and interest exposures, and defend a staged response.",
      "model": "For simple demand with unit cost 20, Q=40 and P=60. Macro operating contribution falls from $48m to $38.28m, or $9.72m; annual interest rises $4m if fully exposed. A static game needs plausible payoff evidence and legal constraints. The recommendation should distinguish price testing, hedge terms, borrowing resets, liquidity and non-identical scenarios.",
      "rubric": [
        "Correct quantitative work with a reproducible bridge.",
        "Clear separation of disclosed facts, assumptions and inference.",
        "At least two credible alternatives and a downside scenario.",
        "A defensible recommendation, owner and reversal trigger."
      ]
    },
    "portfolioExtension": {
      "title": "Board macro and competition decision pack",
      "prompt": "Prepare a 1,200–1,600 word board pack for a large corporation with documented international or floating-rate exposure. Use a dated annual report for disclosed facts and label scenarios and payoff matrices fictional.",
      "requirements": [
        "Model demand and marginal revenue with units, a profit versus revenue choice and a sensitivity.",
        "Build a two-player payoff matrix and test dominant strategies/Nash responses; state why it is illustrative.",
        "Quantify a joint inflation, FX, volume and interest scenario with operating versus financing effects separated.",
        "Propose a lawful pricing process, three leading indicators, a funding trigger and counterargument."
      ],
      "minutes": 180,
      "rubric": [
        "Dated and traceable sources, with facts separated from assumptions.",
        "An auditable quantitative analysis with consistent definitions.",
        "A serious counterargument and scenario challenge.",
        "A board-ready recommendation with decision rights and monitoring."
      ]
    },
    "readings": [
      {
        "title": "Open Yale Courses: Game Theory course and problem sets",
        "url": "https://oyc.yale.edu/economics/econ-159",
        "task": "Study the public Yale College game-theory introduction and at least one published problem set. Yale labels this an undergraduate course; use it as a supplemental technical benchmark, not a Yale MBA credential. Solve a best-response table independently and explain a corporate application.",
        "minutes": 90
      }
    ],
    "status": "authored expanded sequence"
  },
  "course-06": {
    "modules": [
      {
        "id": "course-06-m4",
        "title": "Earnings-to-cash bridge and estimate challenge",
        "lessons": [
          {
            "id": "c06-qualitybridge",
            "title": "Earnings-to-cash bridge and estimate challenge",
            "minutes": 35,
            "body": [
              "Operating cash flow under the indirect method begins with net income and adjusts for noncash items and operating balance changes. Add depreciation; subtract receivables and inventory increases; add operating payable increases, subject to acquisition, currency and classification effects. A bridge that balances is still only an arithmetic reconciliation; it cannot establish that revenue was valid or customers can pay.",
              "Compare receivables with credit sales over matching periods. A rise in days sales outstanding can reflect weak collections, deliberate terms, acquisition, seasonality or an accounting estimate; investigate aging, customer concentration, credit losses and contracts. Never infer misconduct from a single ratio. An aggressive useful-life extension may lift profit without adding cash or changing replacement needs.",
              "Quality-of-earnings analysis asks what normalized, repeatable cash generation looks like. Disclose adjustments rather than accepting management’s adjusted metric at face value. Analyze working-capital releases separately from sustainable operating margins. Request source footnotes and management explanation for both favorable and adverse deviations."
            ],
            "example": "Fictional consolidated net income 120, depreciation 30, receivables +45, inventory +20 and payables +15 imply simplified operating cash 100. With capex 70, simple FCF is 30. If 15 of cash came from stretching suppliers beyond sustainable terms, normalized near-term cash is lower; this is a sensitivity, not a required accounting adjustment to the published statement.",
            "transfer": "Build a bridge when receivables instead increase 65 and payables remain 15. Explain what evidence would test whether the 20 difference is seasonal or persistent.",
            "tutor": {
              "question": "Build a bridge when receivables instead increase 65 and payables remain 15. Explain what evidence would test whether the 20 difference is seasonal or persistent.",
              "hints": [
                "Begin at net income 120 and add 30 noncash depreciation.",
                "Subtract 65 receivables and 20 inventory, add 15 payables: operating cash=80."
              ],
              "response": "Request credit sales, aging, acquisition and seasonal data before explaining why receivables rose.",
              "steps": [
                "Begin at net income 120 and add 30 noncash depreciation.",
                "Subtract 65 receivables and 20 inventory, add 15 payables: operating cash=80.",
                "Subtract 70 capex for simple FCF 10. The cash decline is 20 versus the original scenario.",
                "Request credit sales, aging, acquisition and seasonal data before explaining why receivables rose."
              ]
            }
          }
        ]
      },
      {
        "id": "course-06-m5",
        "title": "Covenant headroom and the debt maturity wall",
        "lessons": [
          {
            "id": "c06-covenant",
            "title": "Covenant headroom and the debt maturity wall",
            "minutes": 35,
            "body": [
              "Debt analysis requires both amount and timing. A covenant may cap net-debt-to-EBITDA or demand minimum interest coverage under definitions in an agreement. Those definitions may adjust EBITDA, restrict eligible cash or set measurement dates. A ratio calculated from a summary press release is not proof of compliance. State the exact assumed definitions for classroom cases.",
              "Headroom is the distance to a limit. A firm at 2.5× net leverage with a 3.0× maximum has numerical headroom, but lower EBITDA or borrowing can erase it. Compare cash needed for maturities, capex and minimum operating reserve with committed facilities. A facility subject to covenant compliance may become less usable precisely when needed.",
              "Build a quarterly cash calendar. Annual operating cash flow may arrive after a principal payment. Stress collections and margin together, then state which management actions are actually discretionary. A plan to refinance is a hypothesis until it is committed. Changing accounting estimates to improve covenant EBITDA without economic improvement is not a funding solution."
            ],
            "example": "Assume debt 500, eligible cash 100, covenant EBITDA 160 and max net-debt/EBITDA 3.0×. Net leverage=400/160=2.5×. If EBITDA falls to 130 with debt and cash unchanged, ratio=3.077×, breaching the assumed limit. The minimum EBITDA for compliance is 400/3≈133.33. A 120 maturity due next quarter still requires a cash calendar even in the base ratio case.",
            "transfer": "If cash falls 30 to fund capex while debt stays 500 and EBITDA 160, recalculate leverage and discuss whether funding capex from cash creates covenant risk.",
            "tutor": {
              "question": "If cash falls 30 to fund capex while debt stays 500 and EBITDA 160, recalculate leverage and discuss whether funding capex from cash creates covenant risk.",
              "hints": [
                "Eligible cash becomes 70; net debt rises from 400 to 430.",
                "Leverage is 430/160=2.6875×, below the hypothetical 3.0× cap."
              ],
              "response": "Confirm the agreement’s treatment of eligible cash, EBITDA and capex before any real conclusion.",
              "steps": [
                "Eligible cash becomes 70; net debt rises from 400 to 430.",
                "Leverage is 430/160=2.6875×, below the hypothetical 3.0× cap.",
                "Headroom narrows; if EBITDA falls to 140, ratio=3.071× and breaches.",
                "Confirm the agreement’s treatment of eligible cash, EBITDA and capex before any real conclusion."
              ]
            }
          }
        ]
      },
      {
        "id": "course-06-m6",
        "title": "Segment disclosures and executive forecast challenge",
        "lessons": [
          {
            "id": "c06-segment",
            "title": "Segment disclosures and executive forecast challenge",
            "minutes": 35,
            "body": [
              "Consolidated ratios can conceal a weak segment offset by a strong one. Read the segment note for revenue, profit definition, intersegment transfers and assets before ranking divisions. Some public reports omit comparable invested capital or use management-defined segment profit; do not fabricate an ROIC from incompatible measures.",
              "A credible forecast starts from operating drivers: volume, price, mix, cost and investment by segment. Link revenue and margins to receivables, inventory, capex and debt service. If a forecast assumes sales growth and faster collections, test whether customer terms or mix justify both. An adverse scenario may affect several drivers at once.",
              "Present a board recommendation with a reconciled group total, segment downside, funding needs and a monitorable trigger. Explain what cannot be inferred without contract detail or cash timing. Compare remedies—collections, pricing, inventory and financing—on service quality and reversibility. Even a well-labeled ratio cannot replace source disclosure."
            ],
            "example": "Segment A revenue 600 and operating profit 90; segment B revenue 400 and profit 20. Corporate unallocated expense 30 yields consolidated operating profit 80 on revenue 1,000, or 8%. A and B margins are 15% and 5%; their weighted combined margin before corporate cost is 11%. An unweighted average 10% is wrong, and neither segment margin reconciles group profit without 30 corporate expense.",
            "transfer": "If B revenue falls 10% at unchanged 5% segment margin while A and corporate expense remain fixed, compute group margin and challenge the constant-margin assumption.",
            "tutor": {
              "question": "If B revenue falls 10% at unchanged 5% segment margin while A and corporate expense remain fixed, compute group margin and challenge the constant-margin assumption.",
              "hints": [
                "B revenue becomes 360; profit at 5% becomes 18.",
                "Total revenue=960, group operating profit=90+18−30=78."
              ],
              "response": "The constant-margin assumption ignores fixed segment costs, mix and working-capital changes.",
              "steps": [
                "B revenue becomes 360; profit at 5% becomes 18.",
                "Total revenue=960, group operating profit=90+18−30=78.",
                "Group margin=78/960=8.125%, slightly above 8% because low-margin B shrinks; absolute profit falls 2.",
                "The constant-margin assumption ignores fixed segment costs, mix and working-capital changes."
              ]
            }
          }
        ]
      }
    ],
    "applications": [
      {
        "id": "c06-a1",
        "title": "Earnings quality and a liquidity calendar",
        "prompt": "A fictional corporation reports net income 120, depreciation 30, receivables increase 45, inventory increase 20, payables increase 15 and capex 70. A 120 debt payment is due next quarter; eligible opening cash is 100.",
        "requirements": [
          "Reconcile operating cash and simple free cash flow.",
          "Stress receivables increasing 65 rather than 45.",
          "Explain why annual cash flow cannot establish ability to pay the next-quarter maturity.",
          "Identify at least four evidence requests from notes, contracts and cash forecasts."
        ],
        "solution": [
          "Base operating cash=120+30−45−20+15=100 and simple FCF=30. Under receivables +65, CFO=80 and simple FCF=10.",
          "Annual FCF 30 is a period total, not available cash on a particular debt date. Opening eligible cash 100 is below the 120 maturity before other payments or committed funding.",
          "Request quarterly collection schedules, restricted cash, capex commitments, facility availability, covenant definitions, maturity terms and receivable quality."
        ],
        "minutes": 60,
        "rubric": [
          "All calculations reconcile with labeled units and periods.",
          "A causal or economic interpretation follows the calculations.",
          "Alternative assumptions and downside effects are analyzed.",
          "The decision states evidence limits and a monitorable trigger."
        ]
      },
      {
        "id": "c06-a2",
        "title": "Covenant and segment stress",
        "prompt": "Debt 500, eligible cash 100, covenant EBITDA 160, maximum net leverage 3.0×. A has revenue 600/profit 90, B has revenue 400/profit 20, and corporate expense is 30. B revenue falls 10% with a stated constant segment margin assumption.",
        "requirements": [
          "Compute base and stressed leverage with EBITDA falling to 130.",
          "Compute the covenant EBITDA floor under unchanged net debt.",
          "Reconcile segment to group operating profit and revenue before and after B stress.",
          "State why covenant EBITDA and GAAP segment operating profit cannot be used interchangeably."
        ],
        "solution": [
          "Base net debt=400, leverage=2.5×; at EBITDA 130, 400/130=3.077×, above 3.0. Minimum EBITDA=133.33.",
          "Base group profit=90+20−30=80 on revenue 1,000. Stressed B profit=18 on revenue 360; group profit=78 on revenue 960, margin=8.125%.",
          "Covenant EBITDA can include contract-specific adjustments and differs from operating profit. Consult the credit agreement and statement notes before asserting compliance or cash capacity."
        ],
        "minutes": 60,
        "rubric": [
          "All calculations reconcile with labeled units and periods.",
          "A causal or economic interpretation follows the calculations.",
          "Alternative assumptions and downside effects are analyzed.",
          "The decision states evidence limits and a monitorable trigger."
        ]
      }
    ],
    "advancedExam": {
      "minutes": 120,
      "instructions": "Independent four-part executive exam. Solve on paper and select every answer before submitting; then write the case analysis before opening the model. No external grading or proctoring.",
      "questions": [
        {
          "id": "a6e1",
          "prompt": "NI 120, depreciation 30, AR +45, inventory +20, AP +15. Simplified operating cash flow?",
          "options": [
            "100",
            "130",
            "120",
            "80"
          ],
          "correct": 0,
          "explanation": "120+30−45−20+15=100. Capex is investing in this classroom bridge.",
          "remediation": "Track each balance change’s cash direction before adding it to net income.",
          "lessonId": "c06-qualitybridge"
        },
        {
          "id": "a6e2",
          "prompt": "Debt 500, eligible cash 100, EBITDA 130 and max net leverage 3.0×. What is the ratio and conclusion?",
          "options": [
            "2.5× compliant",
            "3.077× over limit",
            "3.0× exactly",
            "4.0× compliant"
          ],
          "correct": 1,
          "explanation": "Net debt 400/130=3.077×, exceeding the hypothetical 3.0× maximum.",
          "remediation": "Use eligible cash and covenant EBITDA under the stated classroom definition.",
          "lessonId": "c06-covenant"
        },
        {
          "id": "a6e3",
          "prompt": "Segment A revenue 600/profit 90, B revenue 400/profit 20, unallocated corporate expense 30. Consolidated operating margin?",
          "options": [
            "11%",
            "10%",
            "8%",
            "15%"
          ],
          "correct": 2,
          "explanation": "(90+20−30)/(600+400)=80/1000=8%.",
          "remediation": "Reconcile corporate expense to segment profits before dividing by group sales.",
          "lessonId": "c06-segment"
        },
        {
          "id": "a6e4",
          "prompt": "At net debt 400 and max leverage 3.0×, minimum covenant EBITDA for compliance is about:",
          "options": [
            "120",
            "130",
            "160",
            "133.33"
          ],
          "correct": 3,
          "explanation": "400/3≈133.33. At 130 the limit is exceeded under this assumption.",
          "remediation": "Rearrange net debt/EBITDA≤3, then check the measurement convention.",
          "lessonId": "c06-covenant"
        }
      ],
      "written": "A board sees net income 120, operating cash 100 and simple FCF 30; it also sees net debt 400 and covenant EBITDA falling from 160 to 130 against a 3.0× maximum. In 800–1,000 words reconcile the cash bridge, assess covenant compliance and a 120 debt maturity next quarter, reconcile two segments (600/90 and 400/20) plus corporate cost 30, compare three financing/operating actions and give a conditional recommendation.",
      "model": "Base CFO 100, FCF 30. Net leverage rises from 2.5× to 3.077× at EBITDA 130, above the assumed limit. Opening 100 eligible cash is not sufficient by itself for a next-quarter 120 maturity. Segments total 110 profit before corporate expense 30, yielding 80 profit on 1,000 sales. A quarterly cash forecast, credit agreement definitions and committed funding must govern action; do not treat annual FCF as cash already received.",
      "rubric": [
        "Correct quantitative work with a reproducible bridge.",
        "Clear separation of disclosed facts, assumptions and inference.",
        "At least two credible alternatives and a downside scenario.",
        "A defensible recommendation, owner and reversal trigger."
      ]
    },
    "portfolioExtension": {
      "title": "CFO annual-report and covenant evidence pack",
      "prompt": "Prepare a 1,200–1,600 word CFO/board pack using a dated annual report of a major public corporation plus its debt notes or a public credit agreement if available. State when covenant definitions cannot be obtained.",
      "requirements": [
        "Reconcile income to operating cash and simple free cash flow for two comparable periods with balance-change sources.",
        "Compute segment margins and reconcile unallocated corporate expenses; explain omitted comparability items.",
        "Build a quarterly liquidity stress with maturity, minimum cash reserve and an explicitly hypothetical covenant threshold.",
        "Give a decision with three alternatives, a management evidence request, monitoring indicators and disclosure limitations."
      ],
      "minutes": 180,
      "rubric": [
        "Dated and traceable sources, with facts separated from assumptions.",
        "An auditable quantitative analysis with consistent definitions.",
        "A serious counterargument and scenario challenge.",
        "A board-ready recommendation with decision rights and monitoring."
      ]
    },
    "readings": [
      {
        "title": "Oxford Saïd: board questions about corporate purpose",
        "url": "https://www.sbs.ox.ac.uk/oxford-answers/five-questions-boards-should-ask-about-purpose",
        "task": "Read this Oxford Saïd public analysis as governance research, not a complete Oxford course. Compare its board oversight questions with a CFO liquidity memo: identify where strategy, incentives and disclosure quality affect the credibility of a cash forecast.",
        "minutes": 90
      }
    ],
    "status": "authored expanded sequence"
  }
};for(const [id,part] of Object.entries(patches)){const c=window.BAContent[id];if(!c)throw Error("Missing foundation "+id);c.modules.push(...part.modules);c.applications=part.applications;c.advancedExam=part.advancedExam;c.portfolioExtension=part.portfolioExtension;c.readings.push(...part.readings);c.status=part.status}})();
