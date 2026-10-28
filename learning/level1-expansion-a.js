/* Level 1 academic expansion, batch A: original fictional cases and distinct evidence IDs. */
(function(){const patches={
  "course-01": {
    "modules": [
      {
        "id": "course-01-m4",
        "title": "Economic profit and invested capital",
        "lessons": [
          {
            "id": "c01-roic",
            "title": "Economic profit and invested capital",
            "minutes": 35,
            "body": [
              "An operating margin describes profit relative to sales, but a capital-intensive division can earn a high margin while using so much capital that its economic return is weak. Return on invested capital (ROIC) is after-tax operating profit divided by invested capital under a stated definition. Compare that return with a risk-consistent capital charge. A positive spread creates economic profit in the simplified model; the numerator and denominator must match the same business and period.",
              "Invested capital may be approximated by operating assets less non-interest-bearing operating liabilities. Cash, goodwill, leases and averages require consistent treatment. A year-end balance can distort a fast-growing or acquired division; average beginning and ending balances are often more informative. Never treat a reported ROIC as a universal accounting fact without seeing the analyst definition.",
              "The decision is incremental. A new factory can lower the group average ROIC yet add value if its incremental return exceeds its cost of capital. Conversely, a manager may boost ROIC by cutting maintenance, releasing inventory or refusing good investments. Inspect service levels and long-term cash as well as the ratio."
            ],
            "example": "Fictional Atlas division produces EBIT 150, tax assumption 25%, and has average operating invested capital 900. NOPAT is 112.5; ROIC is 12.5%. With a 10% capital charge, economic profit is 112.5−90 = 22.5. A proposed 200 investment that adds after-tax operating profit 24 earns 12%; it adds 4 economic profit even if the division’s consolidated ROIC shifts.",
            "transfer": "Calculate the new average ROIC after the 200 investment, assuming all else stays fixed. Then state what evidence about asset life and maintenance is missing.",
            "tutor": {
              "question": "Calculate the new average ROIC after the 200 investment, assuming all else stays fixed. Then state what evidence about asset life and maintenance is missing.",
              "hints": [
                "Set the numerator: original NOPAT 112.5 plus incremental 24.",
                "Set the denominator: 900 plus new invested capital 200; use matching scope."
              ],
              "response": "Incremental return 24/200 = 12% exceeds the 10% charge. Do not reject it solely because the average fell.",
              "steps": [
                "Set the numerator: original NOPAT 112.5 plus incremental 24.",
                "Set the denominator: 900 plus new invested capital 200; use matching scope.",
                "Compute 136.5/1,100 = 12.41%; the average dips slightly.",
                "Incremental return 24/200 = 12% exceeds the 10% charge. Do not reject it solely because the average fell."
              ]
            }
          }
        ]
      },
      {
        "id": "course-01-m5",
        "title": "Governance, incentives and unintended behavior",
        "lessons": [
          {
            "id": "c01-incentives",
            "title": "Governance, incentives and unintended behavior",
            "minutes": 35,
            "body": [
              "Executive pay plans are control systems. A revenue target can encourage low-quality sales; an EBITDA target can encourage deferring maintenance; a return target can discourage new projects that create value. Each metric has a legitimate use, but the board must examine the decisions it rewards. A balanced scorecard should pair performance outcomes with risk, cash, customer and investment indicators.",
              "Board oversight is a sequence: management proposes; the CFO and operating leaders validate numbers; independent risk or audit functions challenge exposure; the board approves material limits and monitors results. Actual legal duties vary by jurisdiction. Separation of proposal from challenge reduces the chance that the sponsor alone controls data, assumptions and post-decision review.",
              "When performance disappoints, identify whether the measurement failed, the strategy failed or an external shock occurred. Retrospective outcomes cannot establish whether an ex ante decision was reasonable. Keep a decision log with the original forecast, alternative, dissent, threshold and owner; compare it with later evidence without rewriting history."
            ],
            "example": "A CEO is rewarded for 15% revenue growth. A division sells 100 of annual contracts with 30% discounts and 120-day payment terms. Reported revenue may rise, while contribution and collections fall. A board pack should calculate price-volume effects, receivable days, gross retention, customer concentration and variable compensation triggers before deciding whether the incentive achieved its purpose.",
            "transfer": "Design a four-metric executive scorecard and state how a manager could game each measure. Propose one independent data check per measure.",
            "tutor": {
              "question": "Design a four-metric executive scorecard and state how a manager could game each measure. Propose one independent data check per measure.",
              "hints": [
                "Name the decision and the rewarded metric before criticizing it.",
                "Trace how discounts change contribution and extended terms change cash."
              ],
              "response": "Assign independent verification and a board review date. A balanced scorecard still needs judgment.",
              "steps": [
                "Name the decision and the rewarded metric before criticizing it.",
                "Trace how discounts change contribution and extended terms change cash.",
                "Add one forward indicator such as renewal quality and one constraint such as liquidity.",
                "Assign independent verification and a board review date. A balanced scorecard still needs judgment."
              ]
            }
          }
        ]
      },
      {
        "id": "course-01-m6",
        "title": "Corporate portfolio and synergy tests",
        "lessons": [
          {
            "id": "c01-synergy",
            "title": "Corporate portfolio and synergy tests",
            "minutes": 35,
            "body": [
              "A corporate parent owns a set of businesses. A claimed synergy is incremental value from combining them, not the sum of the two stand-alone forecasts. Revenue synergy requires evidence that cross-selling or improved distribution creates incremental demand without offsetting churn or sales cannibalization. Cost synergy requires one-time integration expense, timing and an owner accountable for realization.",
              "To value a proposed combination, calculate stand-alone value of target and acquirer, present value of realizable incremental cash flows, implementation cost and purchase price. Avoid counting the same benefit in both a higher target forecast and a separate synergy line. A benefit to the customer need not become a benefit to owners if competitors match the offer or suppliers capture it.",
              "Use a counterfactual: what would each business achieve separately? A board should compare acquisition with partnership, internal build and no transaction. A deal can be strategic and still destroy value at an excessive price. Set a maximum bid based on evidence and preserve a downside case that delays or halves synergy."
            ],
            "example": "Parent A values a target at 600 stand-alone. Its credible after-tax synergy has present value 90 and costs 30 to integrate. At a proposed price of 680, net value to A is 600+90−30−680 = −20. The value-based maximum price is 660 before additional execution risk. At 640, the modeled gain is 20.",
            "transfer": "Recompute the maximum price if only half the synergy is realized and integration cost rises to 40. Compare a licensing partnership with a full purchase.",
            "tutor": {
              "question": "Recompute the maximum price if only half the synergy is realized and integration cost rises to 40. Compare a licensing partnership with a full purchase.",
              "hints": [
                "Separate stand-alone target value 600 from synergy 45.",
                "Subtract integration cost 40; maximum price is 605."
              ],
              "response": "A partnership may share upside without acquiring all target risk. Specify the evidence needed for exclusivity and price.",
              "steps": [
                "Separate stand-alone target value 600 from synergy 45.",
                "Subtract integration cost 40; maximum price is 605.",
                "Compare proposed price to 605; 680 overpays 75 in the downside case.",
                "A partnership may share upside without acquiring all target risk. Specify the evidence needed for exclusivity and price."
              ]
            }
          }
        ]
      }
    ],
    "applications": [
      {
        "id": "c01-a1",
        "title": "Capital allocation under an average-return trap",
        "prompt": "A parent has NOPAT 112.5 on 900 average invested capital. It can fund Project X with 200 capital and 24 annual NOPAT, or Project Y with 100 capital and 7 annual NOPAT. Assume a 10% capital charge and perpetually steady after-tax operating profit only for this screening comparison.",
        "requirements": [
          "Compute original and post-investment ROIC for X and Y.",
          "Calculate each project’s incremental economic profit and identify which clears the capital charge.",
          "Explain the trap in ranking projects by the old divisional average ROIC.",
          "Name at least two forecast or asset-life assumptions the screening formula omits."
        ],
        "solution": [
          "Original ROIC =112.5/900 =12.5%. With X: (112.5+24)/(900+200)=12.41%. With Y: 119.5/1,000=11.95%. Both lower the old average.",
          "X incremental economic profit =24−(200×.10)=4. Y =7−(100×.10)=−3. Choose X under the screening assumptions; reject Y even though it adds accounting profit.",
          "This is not a full valuation. Test the length of returns, capex, taxes, working capital, risk and whether the capital charge remains appropriate."
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
        "id": "c01-a2",
        "title": "Acquisition board challenge",
        "prompt": "A fictional target has stand-alone value 600, synergy PV 90, integration cost 30 and asking price 680. In an adverse case, synergy PV is 45 and cost is 40. Evaluate the bid and an alternative partnership.",
        "requirements": [
          "Show base and adverse total value, bid premium and modeled gain or loss.",
          "Propose a maximum bid for both cases and avoid double counting.",
          "Identify who proposes, independently challenges, approves and tracks the deal.",
          "State a measurable synergy milestone and a walk-away condition."
        ],
        "solution": [
          "Base maximum =600+90−30=660, so 680 destroys 20 of value. Adverse maximum =600+45−40=605, so 680 destroys 75.",
          "The bid premium over stand-alone value is 80. A partnership may let A test cross-selling at a smaller commitment; its revenue share and control limits must be valued.",
          "Finance should reconcile assumptions, operating leaders should own synergy, independent review should challenge, and the board should approve the material transaction. Walk away if credible synergy falls below the premium plus cost."
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
          "id": "a1e1",
          "prompt": "A division earns NOPAT 112.5 on 900 average invested capital. A 200 project adds 24 NOPAT. What is the post-project ROIC?",
          "options": [
            "12.50%",
            "12.41%",
            "12.00%",
            "13.65%"
          ],
          "correct": 1,
          "explanation": "(112.5+24)/(900+200)=136.5/1,100=12.41%. The incremental return of the project is a different 12%.",
          "remediation": "Reconcile numerator and denominator at the same scope before comparing average and incremental returns.",
          "lessonId": "c01-roic"
        },
        {
          "id": "a1e2",
          "prompt": "At a 10% capital charge, what incremental economic profit does that 200 project create?",
          "options": [
            "−4",
            "0",
            "4",
            "24"
          ],
          "correct": 2,
          "explanation": "24−(200×.10)=4 of incremental annual economic profit under the simplified assumptions.",
          "remediation": "Review the incremental capital charge; do not subtract the charge on the entire division.",
          "lessonId": "c01-roic"
        },
        {
          "id": "a1e3",
          "prompt": "Target value 600, synergy 90, integration cost 30, price 680. Acquirer net gain?",
          "options": [
            "20",
            "−20",
            "80",
            "−80"
          ],
          "correct": 1,
          "explanation": "600+90−30−680=−20. The price consumes more than the credible target-plus-synergy value.",
          "remediation": "Build the value bridge exactly once; distinguish price premium and integration spending.",
          "lessonId": "c01-synergy"
        },
        {
          "id": "a1e4",
          "prompt": "Which board action most directly counters a sales bonus tied only to revenue?",
          "options": [
            "Raise the target",
            "Stop tracking cash",
            "Reward only revenue growth",
            "Review contribution and collections independently alongside growth"
          ],
          "correct": 3,
          "explanation": "Contribution and collections expose discounting and weak credit terms that revenue alone hides.",
          "remediation": "Compare revenue with value capture and cash conversion, then assign independent verification.",
          "lessonId": "c01-incentives"
        }
      ],
      "written": "A fictional multinational’s CEO proposes buying a division at 680 against stand-alone value 600, synergy PV 90 and integration cost 30. The seller claims this will also lift the buyer’s ROIC. Write an 800–1,000 word board decision: calculate base and downside (half synergy, cost 40), identify flawed incentives and double-count risk, compare a partnership, and specify approval and monitoring roles.",
      "model": "The base case loses 20; downside loses 75. An ROIC assertion cannot rescue an overpayment without a reconciled cash-flow forecast and consistent invested-capital base. Partnership or lower price may preserve options. A documented value bridge, independent assumptions challenge, board approval and post-close synergy milestones make the claim testable.",
      "rubric": [
        "Correct quantitative work with a reproducible bridge.",
        "Clear separation of disclosed facts, assumptions and inference.",
        "At least two credible alternatives and a downside scenario.",
        "A defensible recommendation, owner and reversal trigger."
      ]
    },
    "portfolioExtension": {
      "title": "Corporate portfolio board dossier",
      "prompt": "Prepare an independent 1,200–1,600 word board dossier on a large public corporation with at least two disclosed segments. Use its dated annual report and one other dated primary filing or investor presentation.",
      "requirements": [
        "Cite segment revenues, segment profit definitions, capital or assets, customer risks and governance disclosures by page or section.",
        "Compute a comparable segment margin and an approximate invested-capital or cash-return indicator; explain allocation limits.",
        "Assess an acquisition, internal investment or partnership with a stand-alone versus synergy bridge and a downside case.",
        "Include a decision-rights map, incentive risk, four measure dashboard and an explicit stop/continue rule."
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
        "title": "Wharton faculty analysis of financial data and strategy",
        "url": "https://knowledge.wharton.upenn.edu/article/finance-accounting-for-the-rest-of-us-a-conversation-with-richard-a-lambert/",
        "task": "Read the Wharton faculty discussion as analysis, not a Wharton MBA course. Identify two reported numbers that rely on estimates. Explain how each estimate could change a board decision, and check the footnotes of one public company for evidence.",
        "minutes": 90
      }
    ],
    "status": "authored expanded sequence"
  },
  "course-02": {
    "modules": [
      {
        "id": "course-02-m4",
        "title": "Annuities, bonds and comparable cash flows",
        "lessons": [
          {
            "id": "c02-annuity",
            "title": "Annuities, bonds and comparable cash flows",
            "minutes": 35,
            "body": [
              "Present value is additive only when cash flows have consistent dates, currencies and risk treatment. An annuity is a series of equal end-of-period payments. Its present value at positive periodic rate r for n payments is C×[1−(1+r)^−n]/r. This is a shortcut for a dated sum, not a license to ignore a delayed start or an extra payment at time zero.",
              "A bond price is present value of coupon payments plus the principal repayment. Coupon rate determines contractual cash, while yield is the discount rate consistent with a market price under stated compounding. At issuance yield equal to coupon gives par in the simple fixed-rate case. If yield rises, a fixed coupon bond generally falls in value; duration measures rate sensitivity more precisely.",
              "An investment comparison needs the same horizon. When alternatives have unequal lives, simply choosing the larger NPV may favor a long project. Equivalent annual annuity converts NPV to a common annual amount under repeatability assumptions; if projects cannot repeat or capacity differs, the shortcut can mislead."
            ],
            "example": "A three-year end-of-year annuity of 40 discounted at 10% has PV 40×(1−1/1.1³)/.10 = 99.474. A two-year bond paying coupons 5 and principal 100 has price 5/1.1 +105/1.1² = 91.322 at 10% yield. It is below par because coupon 5% is lower than required yield 10%.",
            "transfer": "Price the same bond at 5% yield and explain the difference. Then adjust the annuity if its first payment is at the end of year 2.",
            "tutor": {
              "question": "Price the same bond at 5% yield and explain the difference. Then adjust the annuity if its first payment is at the end of year 2.",
              "hints": [
                "Build a timeline with payments at years 1 and 2.",
                "At 5% yield, price=5/1.05+105/1.05² =100."
              ],
              "response": "Check whether coupon and yield periodicities agree before making a board comparison.",
              "steps": [
                "Build a timeline with payments at years 1 and 2.",
                "At 5% yield, price=5/1.05+105/1.05² =100.",
                "A year-2-start annuity pays in years 2, 3 and 4; discount the original PV one extra year to 90.431.",
                "Check whether coupon and yield periodicities agree before making a board comparison."
              ]
            }
          }
        ]
      },
      {
        "id": "course-02-m5",
        "title": "Nominal versus real discounting and risk",
        "lessons": [
          {
            "id": "c02-real",
            "title": "Nominal versus real discounting and risk",
            "minutes": 35,
            "body": [
              "Nominal cash flows include expected inflation; real cash flows are expressed in purchasing power of a base date. The exact Fisher relationship is 1+nominal rate=(1+real rate)×(1+inflation rate) under the assumed convention. Discounting real cash at a nominal rate understates value. Use a consistent pair and disclose expected inflation separately from company-specific pricing.",
              "An expected return is not a promised return or a bank rate. Riskier operating cash flows usually require a higher opportunity cost, but adding arbitrary risk premiums to both a pessimistic forecast and a discount rate may double count the same risk. A scenario approach changes operating drivers, while a discount-rate sensitivity tests the valuation assumption. State the overlap.",
              "For a mixed-currency project, forecast each currency and use a consistent currency-specific discount framework or translate using explicit exchange assumptions. Interest parity and exchange forecasts are different concepts; do not assume a past spot rate fixes future conversion. A board should see where value comes from and how much is exposed to unhedged assumptions."
            ],
            "example": "Real cash flow 100 due in one year, real discount rate 4%, expected inflation 3%: PV is 100/1.04 =96.154 in base-year purchasing power. Nominal cash is 103, nominal discount rate is 1.04×1.03−1 =7.12%, and 103/1.0712 =96.154. Discounting 103 at 4% would incorrectly give 99.038.",
            "transfer": "Extend this consistency check to two years with constant inflation and rate. Explain why a corporate price increase may differ from general inflation.",
            "tutor": {
              "question": "Extend this consistency check to two years with constant inflation and rate. Explain why a corporate price increase may differ from general inflation.",
              "hints": [
                "Compute real cash 100 discounted twice at 4%: 92.456.",
                "Convert year-2 nominal cash: 100×1.03²=106.09."
              ],
              "response": "Company-specific pricing, volume and input costs may differ from an economy-wide index.",
              "steps": [
                "Compute real cash 100 discounted twice at 4%: 92.456.",
                "Convert year-2 nominal cash: 100×1.03²=106.09.",
                "Nominal rate remains 7.12%; 106.09/1.0712² =92.456.",
                "Company-specific pricing, volume and input costs may differ from an economy-wide index."
              ]
            }
          }
        ]
      },
      {
        "id": "course-02-m6",
        "title": "Decision trees and the value of learning",
        "lessons": [
          {
            "id": "c02-information",
            "title": "Decision trees and the value of learning",
            "minutes": 35,
            "body": [
              "A decision tree orders a decision, uncertain event, information signal and follow-up decision. Calculate expected net values from terminal outcomes back to the initial choice. A test is valuable only when it changes a later action; information that merely confirms what would already be done has no decision value. Include its cost and any delay.",
              "Expected value of perfect information (EVPI) is expected best outcome with advance knowledge minus the best expected value without it, under the same outcomes and probabilities. It is an upper bound on the value of imperfect information, not a forecast of what a real pilot will deliver. For a sample test, use conditional probabilities and Bayes reasoning to update beliefs before choosing.",
              "A large positive expected value can still be unattractive if downside loss threatens liquidity. Decision trees do not encode governance, correlated risks or an organization’s ability to execute. Show a loss limit, reversible stage and decision threshold. Assign a reviewer for the test design to avoid choosing the metric after seeing the result."
            ],
            "example": "Investing yields +80 if demand is high (40% probability), −20 if low (60%); not investing yields 0. Expected investment value is .4×80+.6×(−20)=20, so invest without information. Perfect knowledge would invest only when high: expected value 32. EVPI=32−20=12; a perfect test costing more than 12 cannot add net value.",
            "transfer": "A pilot has 75% sensitivity and 80% specificity for high demand. Calculate P(high|positive), P(high|negative), and the best action after each signal before approving a pilot cost.",
            "tutor": {
              "question": "A pilot has 75% sensitivity and 80% specificity for high demand. Calculate P(high|positive), P(high|negative), and the best action after each signal before approving a pilot cost.",
              "hints": [
                "P(positive)=.4×.75+.6×.20=.42; P(high|positive)=.30/.42=.7143.",
                "P(negative)=.4×.25+.6×.80=.58; P(high|negative)=.10/.58=.1724."
              ],
              "response": "Expected value with the test before cost is .42×51.43=21.6; gain over no test is 1.6. The test is worth at most 1.6 in this simplified case.",
              "steps": [
                "P(positive)=.4×.75+.6×.20=.42; P(high|positive)=.30/.42=.7143.",
                "P(negative)=.4×.25+.6×.80=.58; P(high|negative)=.10/.58=.1724.",
                "Invest after positive: expected payoff .7143×80+.2857×(−20)=51.43. After negative: .1724×80+.8276×(−20)=−2.76, so do not invest.",
                "Expected value with the test before cost is .42×51.43=21.6; gain over no test is 1.6. The test is worth at most 1.6 in this simplified case."
              ]
            }
          }
        ]
      }
    ],
    "applications": [
      {
        "id": "c02-a1",
        "title": "Capital budgeting under inflation",
        "prompt": "A project costs 250 now and returns 90, 105 and 120 nominal at the ends of years 1–3. The nominal hurdle is 9%. General expected inflation is 3%; assume the cash-flow amounts are already nominal.",
        "requirements": [
          "Calculate dated PVs and NPV without treating profit as cash.",
          "Show the approximate real hurdle using the exact Fisher conversion.",
          "Find the year-3 cash flow that makes NPV zero, holding other flows fixed.",
          "Explain at least two risks absent from the deterministic calculation."
        ],
        "solution": [
          "NPV =−250+90/1.09+105/1.09²+120/1.09³ ≈13.61. Keep unrounded terms until the final result.",
          "Real hurdle =(1.09/1.03)−1≈5.825%. Do not discount the given nominal flows using this real rate without first deflating them.",
          "The year-3 break-even flow is [250−90/1.09−105/1.09²]×1.09³ ≈102.38. Investigate tax, reinvestment, working capital, terminal effects and scenario risk."
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
        "id": "c02-a2",
        "title": "Imperfect information as a staged investment",
        "prompt": "An investment yields +80 with high demand (40%) or −20 with low demand (60%). A pilot reports a positive signal with 75% sensitivity and 80% specificity. If the company can choose whether to invest after the signal, compare its expected value with immediate investment.",
        "requirements": [
          "Calculate the no-pilot decision and EVPI.",
          "Compute positive and negative probabilities and Bayesian posteriors.",
          "Choose the action after each signal and determine the maximum pilot cost.",
          "Explain how a funding constraint could reverse an expected-value recommendation."
        ],
        "solution": [
          "Immediate investment EV =20; EVPI=32−20=12. A positive occurs with probability .42 and implies P(high|positive)=5/7≈.7143; negative occurs with .58 and P(high|negative)=.1/.58≈.1724.",
          "Invest only after positive. A simpler joint-probability calculation gives .3×80 +.12×(−20)=21.6 expected value before test cost. Thus an imperfect pilot creates only 1.6 incremental value, far less than EVPI.",
          "If the company cannot absorb the −20 loss or the pilot delays market entry, do not mechanically follow positive EV; model the financing and timing constraints."
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
          "id": "a2e1",
          "prompt": "Three end-of-year payments of 40 at 10% have PV closest to:",
          "options": [
            "99.47",
            "120.00",
            "90.43",
            "109.47"
          ],
          "correct": 0,
          "explanation": "40×[1−(1.10)^−3]/.10 =99.474. The first payment is at year 1.",
          "remediation": "Draw a dated timeline and discount each of the three cash flows.",
          "lessonId": "c02-annuity"
        },
        {
          "id": "a2e2",
          "prompt": "A two-year 5%-coupon bond with face 100 at 10% annual yield is worth about:",
          "options": [
            "100.00",
            "95.00",
            "91.32",
            "105.00"
          ],
          "correct": 2,
          "explanation": "PV =5/1.1 +105/1.1²=91.322. Face is received with the last coupon.",
          "remediation": "Separate coupon cash from principal and discount each at its date.",
          "lessonId": "c02-annuity"
        },
        {
          "id": "a2e3",
          "prompt": "With real rate 4% and inflation 3%, the consistent nominal rate is:",
          "options": [
            "1%",
            "7%",
            "12%",
            "7.12%"
          ],
          "correct": 3,
          "explanation": "(1.04×1.03)−1=.0712 or 7.12%, not simply 7%.",
          "remediation": "Use 1+nominal=(1+real)×(1+inflation); multiply before subtracting one, then match the cash-flow basis.",
          "lessonId": "c02-real"
        },
        {
          "id": "a2e4",
          "prompt": "High-demand payoff 80 at 40%, low payoff −20 at 60%; perfect information allows rejection in low state. EVPI?",
          "options": [
            "32",
            "12",
            "20",
            "60"
          ],
          "correct": 1,
          "explanation": "Best no-information choice has EV 20. Perfect-information EV is .4×80+.6×0=32, so EVPI=12.",
          "remediation": "Compare both policies on the same terminal outcomes before subtracting.",
          "lessonId": "c02-information"
        }
      ],
      "written": "A board proposes a 250 investment returning nominal cash of 90, 105 and 120 over three years at a 9% hurdle. It also offers a pilot to clarify high or low demand but gives no test accuracy. Write 800–1,000 words: calculate NPV and break-even year-3 cash, show consistent real/nominal rates for 3% inflation, set a maximum information budget only after specifying test accuracy, and challenge the liquidity and timing assumptions.",
      "model": "NPV≈13.61 and break-even year-3 cash≈102.38. Real rate≈5.825%. A pilot cannot be valued from vague “clarity”; sensitivity, specificity, priors, conditional actions, test cost and delay are needed. Positive NPV remains conditional on cash timing, tax, risk and capital needs.",
      "rubric": [
        "Correct quantitative work with a reproducible bridge.",
        "Clear separation of disclosed facts, assumptions and inference.",
        "At least two credible alternatives and a downside scenario.",
        "A defensible recommendation, owner and reversal trigger."
      ]
    },
    "portfolioExtension": {
      "title": "Quantitative investment committee workbook",
      "prompt": "Build an auditable decision workbook for a fictional multinational choosing between two mutually exclusive projects with different cash timing and inflation exposures.",
      "requirements": [
        "Use at least three years of dated, incremental cash flows, explicit initial investment, working capital and salvage assumptions.",
        "Compute NPV in nominal and equivalent real terms with a reconciliation and a two-way sensitivity.",
        "Build a decision tree for one uncertain driver, with EVPI and a realistic imperfect-test value.",
        "Provide a 1,200-word recommendation, independent checks, downside funding capacity and reversal trigger."
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
        "title": "MIT Sloan Finance Theory I problem sets and solutions",
        "url": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/pages/problem-sets/",
        "task": "Study the published present-value problem set. Independently solve two problems before consulting solutions, then write down the timing and rate conventions that differ from Business Academy’s fictional cases. MIT material is external and no credit is awarded.",
        "minutes": 90
      }
    ],
    "status": "authored expanded sequence"
  },
  "course-03": {
    "modules": [
      {
        "id": "course-03-m4",
        "title": "A reconciled price-volume-cost bridge",
        "lessons": [
          {
            "id": "c03-bridge",
            "title": "A reconciled price-volume-cost bridge",
            "minutes": 35,
            "body": [
              "A profit bridge explains how one period became another. Choose an order and state it so interaction effects are allocated exactly once. For one product, old profit is old units×(old price−old variable cost)−old fixed cost. One convention measures the price effect on old units, the volume effect on new unit contribution before the cost change, the unit-cost effect on new units and the fixed-cost effect separately.",
              "The bridge must sum to the observed operating-profit change. A negative price effect may be offset by a larger volume effect, but sales growth alone cannot settle the net outcome. Include discontinued or new products as a mix/portfolio term rather than silently applying one constant unit cost to unrelated products.",
              "When a proposed strategy changes price and volume simultaneously, the bridge is an arithmetic decomposition, not a causal estimate of price elasticity. The volume change might reflect demand, marketing or capacity; separate observed movement from the forecast explaining it. A CFO should request a like-for-like bridge by segment and test collection quality."
            ],
            "example": "Old units 1 million, price 100, variable unit cost 60 and fixed cost 20 million yield profit 20 million. New units 1.1 million, price 96, unit cost 61, fixed cost 21 million yield 17.5 million. Bridge: price effect −4 million; volume effect +3.6 million (0.1m×36); cost effect −1.1 million; fixed effect −1 million. Total −2.5 million reconciles 20 to 17.5.",
            "transfer": "Construct the bridge under a different convention that measures volume at old contribution and price at new units. Explain why the sum still agrees although line labels change.",
            "tutor": {
              "question": "Construct the bridge under a different convention that measures volume at old contribution and price at new units. Explain why the sum still agrees although line labels change.",
              "hints": [
                "Calculate old and new profit first to establish the total change −2.5.",
                "At old contribution 40, volume effect is +4; at new volume 1.1m, price effect is −4.4."
              ],
              "response": "The 0.4 difference is the price-volume interaction allocated to a different bridge term.",
              "steps": [
                "Calculate old and new profit first to establish the total change −2.5.",
                "At old contribution 40, volume effect is +4; at new volume 1.1m, price effect is −4.4.",
                "Cost change on 1.1m units is −1.1; fixed increase −1. Add 4−4.4−1.1−1=−2.5.",
                "The 0.4 difference is the price-volume interaction allocated to a different bridge term."
              ]
            }
          }
        ]
      },
      {
        "id": "course-03-m5",
        "title": "Capacity constraints and product mix",
        "lessons": [
          {
            "id": "c03-bottleneck",
            "title": "Capacity constraints and product mix",
            "minutes": 35,
            "body": [
              "When a resource is scarce, contribution per constrained unit can determine the preferred mix under a single binding constraint and independent products. Contribution per product unit alone ignores how many machine hours or labor hours each unit uses. Start with maximum demand and all material resource constraints rather than ranking in a vacuum.",
              "At the margin, the opportunity cost of one hour is the best foregone contribution attainable from it. A special order that uses scarce hours should include displaced contribution even if the direct variable cost is low. Fixed factory expense already committed within the relevant range may be irrelevant to one order, while a new shift or plant adds a step cost.",
              "If a second constraint binds, a simple rank can fail; formulate an optimization with capacity inequalities, demand limits and integer conditions where necessary. A model also needs quality, service and channel effects. Reject claims that a mathematically optimal mix remains optimal when cost or demand forecasts change."
            ],
            "example": "Product A earns contribution 50 per unit using 2 hours; B earns 72 using 4. At 1,200 available hours and max demand 400 for A, A creates 25 per scarce hour versus B 18. Make 400 A (800 hours) and 100 B (400 hours), total contribution 27,200. Making 300 B alone gives 21,600. If A demand falls to 200, use 400 hours on A and 800 on B, total 24,400.",
            "transfer": "An order of 50 B units arrives when A and B are at the 400 A/100 B plan. Compute contribution displaced if no extra hours can be obtained and A demand remains 400.",
            "tutor": {
              "question": "An order of 50 B units arrives when A and B are at the 400 A/100 B plan. Compute contribution displaced if no extra hours can be obtained and A demand remains 400.",
              "hints": [
                "The order uses 50×4=200 hours.",
                "Those hours displace 100 A units at 50 each, or 5,000 contribution."
              ],
              "response": "A B special order needs at least 100 contribution per unit to cover displaced A in this exact configuration.",
              "steps": [
                "The order uses 50×4=200 hours.",
                "Those hours displace 100 A units at 50 each, or 5,000 contribution.",
                "The new B contribution is 50×72=3,600; net −1,400 before any order-specific cost.",
                "A B special order needs at least 100 contribution per unit to cover displaced A in this exact configuration."
              ]
            }
          }
        ]
      },
      {
        "id": "course-03-m6",
        "title": "Working-capital stress and cash runway",
        "lessons": [
          {
            "id": "c03-stress",
            "title": "Working-capital stress and cash runway",
            "minutes": 35,
            "body": [
              "Cash conversion relates the operating cycle to funding. Receivables days approximate average receivables divided by annual credit sales times 365. Inventory days approximate average inventory divided by cost of goods sold times 365. Payable days approximate average payables divided by purchases, sometimes cost of goods sold as a disclosed proxy, times 365. Definitions and averaging matter.",
              "Rapid growth may create additional cash needs even if unit margins hold: new receivables and inventory can precede customer collections. Compare the change in operating working-capital balances, not just cycle days. An improvement in DSO releases cash once relative to the counterfactual. It cannot be booked as recurring annual profit.",
              "A liquidity stress combines lower contribution, delayed collections, planned capital expenditure and debt service on a time calendar. Do not rely on annual cash flow to cover a large payment next month. A realistic management response might delay discretionary capex, change credit terms or secure committed liquidity, with explicit tradeoffs to customer retention and supplier resilience."
            ],
            "example": "Annual credit sales 730 million imply 2 million per day. DSO increasing from 45 to 60 ties up about 30 million additional receivables at constant sales. If inventory adds 12 million and payables add 5, operating working capital uses 37 million cash. Starting available cash 50, operating cash before the working-capital change 40, capex 20 and debt principal 25 leave 8 million, before minimum reserve.",
            "transfer": "Repeat the cash bridge if sales rise 10% and DSO stays at 60. Identify why using only a 15-day change misstates the total receivable requirement.",
            "tutor": {
              "question": "Repeat the cash bridge if sales rise 10% and DSO stays at 60. Identify why using only a 15-day change misstates the total receivable requirement.",
              "hints": [
                "New daily sales are 803/365=2.2 million.",
                "Receivables at 60 DSO =132 million; base receivables at 45 DSO on 730 sales =90 million."
              ],
              "response": "Replace 30 by 42 in the base cash bridge; cash falls by a further 12 to −4 before reserve.",
              "steps": [
                "New daily sales are 803/365=2.2 million.",
                "Receivables at 60 DSO =132 million; base receivables at 45 DSO on 730 sales =90 million.",
                "Additional receivables are 42 million, which includes both growth and slower collections.",
                "Replace 30 by 42 in the base cash bridge; cash falls by a further 12 to −4 before reserve."
              ]
            }
          }
        ]
      }
    ],
    "applications": [
      {
        "id": "c03-a1",
        "title": "Profit bridge and price proposal",
        "prompt": "A division sells 1 million units at 100 with variable cost 60 and fixed costs 20 million. New plan forecasts 1.1 million units at price 96, variable cost 61 and fixed costs 21 million. Prepare an executive bridge in millions.",
        "requirements": [
          "Compute old and proposed revenue, contribution and operating profit.",
          "Show price, volume, unit-cost and fixed-cost effects using one declared convention.",
          "Reconcile effects to the observed profit change.",
          "Explain what evidence would distinguish price-driven volume from a forecast assumption."
        ],
        "solution": [
          "Old revenue 100; contribution 40; profit 20. New revenue 105.6; contribution 38.5; profit 17.5. Revenue rises but profit falls 2.5.",
          "Using price at old volume: −4; volume at 36 new-price/old-cost contribution: +3.6; unit-cost: −1.1; fixed-cost: −1. Total −2.5.",
          "Ask for a controlled price test, segment mix, competitor reaction and collections. The bridge alone does not establish elasticity or causation."
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
        "id": "c03-a2",
        "title": "Capacity, mix and funding stress",
        "prompt": "A plant has 1,200 scarce machine hours. A contributes 50/unit using 2 hours, demand limit 400. B contributes 72/unit using 4 hours. A proposed special order adds 50 B units. Credit sales are 730 million annually; DSO may move from 45 to 60 days.",
        "requirements": [
          "Optimize the base mix with the single bottleneck and demand limits.",
          "Determine whether the B order is attractive when it displaces A.",
          "Estimate additional receivables at unchanged sales and at 10% growth.",
          "Propose a liquidity trigger after adding 12 inventory, 5 payable and 25 debt service, in millions."
        ],
        "solution": [
          "Base mix: 400 A and 100 B; contribution 27,200. The special order displaces 100 A and loses 1,400 contribution before other effects.",
          "At constant sales, DSO rise ties up 30 million. At 10% sales growth and DSO 60, receivables grow from 90 to 132, a 42 million requirement.",
          "With 50 opening cash, 40 operating cash before the working-capital change, 20 capex and 25 debt service, including inventory +12 and payables +5, the constant-sales closing cash is 8; at growth it is −4. Set a reserve trigger and funding response."
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
          "id": "a3e1",
          "prompt": "Old units 1m at 100/60 with fixed 20m; new 1.1m at 96/61 with fixed 21m. New operating profit?",
          "options": [
            "17.5m",
            "20m",
            "38.5m",
            "105.6m"
          ],
          "correct": 0,
          "explanation": "1.1m×(96−61)−21m=17.5m. Old profit was 20m.",
          "remediation": "Compute new contribution before subtracting the new fixed cost.",
          "lessonId": "c03-bridge"
        },
        {
          "id": "a3e2",
          "prompt": "Under price-at-old-volume and volume-at-new-price/old-cost convention, the new-plan volume effect is:",
          "options": [
            "+4m",
            "−4m",
            "+3.6m",
            "−1.1m"
          ],
          "correct": 2,
          "explanation": "(1.1m−1m)×(96−60)=0.1m×36=+3.6m.",
          "remediation": "State the order of the bridge before assigning interaction effects.",
          "lessonId": "c03-bridge"
        },
        {
          "id": "a3e3",
          "prompt": "A contributes 50 per 2 hours, B 72 per 4 hours. With one binding machine constraint, priority?",
          "options": [
            "B because 72>50",
            "A because 25/hour>18/hour",
            "Equal",
            "No product can be ranked"
          ],
          "correct": 1,
          "explanation": "A yields 25 per machine hour versus B 18, subject to demand and other constraints.",
          "remediation": "Divide unit contribution by hours of the scarce resource.",
          "lessonId": "c03-bottleneck"
        },
        {
          "id": "a3e4",
          "prompt": "Annual credit sales 730m. DSO rises from 45 to 60 at constant sales. Additional receivables?",
          "options": [
            "15m",
            "60m",
            "42m",
            "30m"
          ],
          "correct": 3,
          "explanation": "730/365×(60−45)=2m per day×15=30m.",
          "remediation": "Match credit sales per day with the days change; a growth scenario needs both period balances.",
          "lessonId": "c03-stress"
        }
      ],
      "written": "Write an 800–1,000 word CFO investment and pricing memo using the division data in the written bridge problem and the capacity data in the bottleneck problem. Reconcile the profit bridge, quantify the special-order opportunity cost, model DSO stress and a minimum 15 million cash reserve, and compare price reversal, targeted collection work and extra capacity with a decision gate.",
      "model": "Old profit 20m, proposed 17.5m, bridge −4+3.6−1.1−1=−2.5m. A has higher contribution per constrained hour; B order loses 1,400 when it displaces A. A 15-day DSO deterioration consumes 30m at sales 730m, with a larger need under sales growth. Any cash plan must show beginning cash, operating cash before working-capital change, capex, debt service and reserve explicitly.",
      "rubric": [
        "Correct quantitative work with a reproducible bridge.",
        "Clear separation of disclosed facts, assumptions and inference.",
        "At least two credible alternatives and a downside scenario.",
        "A defensible recommendation, owner and reversal trigger."
      ]
    },
    "portfolioExtension": {
      "title": "Global division unit-economics and cash pack",
      "prompt": "Prepare a 1,200–1,600 word executive pack for a large public industrial or consumer company with segment disclosure. Use a dated annual report for facts and label all unit-level estimates fictional unless the company reports them.",
      "requirements": [
        "Build a transparent contribution and profit bridge with one interaction convention.",
        "Model a bottleneck and defend product priority subject to demand and a second constraint caveat.",
        "Calculate two cash-conversion scenarios and a dated liquidity bridge, with source definitions.",
        "Set price, capacity and credit policy decisions with a reserve limit and monitoring dashboard."
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
        "title": "Harvard Business School Online financial statement analysis guide",
        "url": "https://online.hbs.edu/blog/post/financial-statement-analysis",
        "task": "Use the publicly available guide as supplemental executive preparation, not an HBS degree course. Compare vertical and horizontal analysis on a dated annual report, then reconcile a profit improvement to operating cash and identify two missing causal links.",
        "minutes": 90
      }
    ],
    "status": "authored expanded sequence"
  }
};for(const [id,part] of Object.entries(patches)){const c=window.BAContent[id];if(!c)throw Error("Missing foundation "+id);c.modules.push(...part.modules);c.applications=part.applications;c.advancedExam=part.advancedExam;c.portfolioExtension=part.portfolioExtension;c.readings.push(...part.readings);c.status=part.status}})();
