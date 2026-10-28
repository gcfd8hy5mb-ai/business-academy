/* Original corporate finance pilot sequence. */
Object.assign(window.BAContent,{
  "course-14": {
    "status": "authored pilot sequence",
    "description": "Begin Level 3 with a transparent corporate valuation sequence. This is a pilot, not the full 125-hour finance course. Use fictional cash flows and explicit timing; no live security recommendation is made.",
    "outcomes": [
      "Construct unlevered free cash flow from operating drivers.",
      "Value enterprise cash flows and bridge to equity.",
      "Test terminal assumptions and distinguish value from price."
    ],
    "modules": [
      {
        "id": "course-14-m1",
        "title": "Free cash flow",
        "lessons": [
          {
            "id": "c14-fcff",
            "title": "Build an unlevered cash-flow model",
            "minutes": 30,
            "body": [
              "Enterprise valuation asks what the operating business is worth independently of its financing mix under the chosen model. A standard unlevered free cash-flow expression is EBIT×(1−tax rate) + depreciation and amortization − capital expenditure − increase in operating net working capital. Use operating taxes on EBIT for this simplified model, not interest-dependent net income.",
              "Operating working capital commonly excludes cash and interest-bearing debt: operating receivables plus inventory and other operating current assets minus operating current liabilities. State your definition. An increase reduces free cash flow; a release increases it. Forecast operating drivers consistently rather than inserting cash as a balancing plug.",
              "Investment needs link growth to economics. Revenue cannot grow indefinitely with no capacity, maintenance, development or working-capital needs unless the business model supports that assumption. Separate maintenance and growth investment where evidence permits. A projection that raises margins while reducing every supporting investment needs scrutiny.",
              "Keep financing cash flows out of unlevered operating cash flow to avoid double counting with a financing-sensitive discount rate. Lease treatment, acquisitions, nonoperating assets and tax loss carryforwards may require additional adjustments beyond this introductory expression. Document model boundaries before comparing peer values."
            ],
            "example": "EBIT 100, tax 25%, depreciation 20, capex 35 and operating NWC increase 10 give FCFF = 75+20−35−10 = 50. If growth requires another 15 of NWC, FCFF falls to 35 without an immediate change in EBIT. Free cash flow and accounting operating profit are different measures.",
            "transfer": "Build a three-year driver model with revenue, EBIT margin, tax, capex and working-capital ratios. Explain why working capital is a balance but its change enters cash flow.",
            "tutor": {
              "question": "Why exclude interest from FCFF?",
              "hints": [
                "Identify the capital providers served by enterprise cash flows.",
                "Account for financing consistently through valuation and the equity bridge."
              ],
              "response": "FCFF is available to debt and equity providers before financing distributions. Subtracting interest and then using WACC generally mixes valuation frameworks."
            }
          }
        ]
      },
      {
        "id": "course-14-m2",
        "title": "Enterprise valuation",
        "lessons": [
          {
            "id": "c14-dcf",
            "title": "Discount, terminal value and the equity bridge",
            "minutes": 30,
            "body": [
              "Discount unlevered free cash flows at a rate appropriate to their operating risk and financing assumptions, commonly WACC in a standard enterprise DCF. WACC combines market-value weights and required returns on debt and equity, with a tax adjustment when appropriate. The borrowing rate alone is not a sufficient enterprise discount rate.",
              "A constant-growth terminal value at the end of year n is FCFF in year n+1 divided by WACC minus perpetual growth. The model requires WACC greater than growth and a sustainable steady state. Discount the terminal value back from year n, not from year n+1. The next-year numerator and valuation date must match.",
              "Enterprise value from operating cash flows is not equity value. A simplified bridge adds nonoperating cash and subtracts debt and other senior claims to obtain equity value. Include noncontrolling interests, pension or lease adjustments and other claims where relevant, using a consistent valuation framework. Avoid counting an asset twice.",
              "Terminal value often dominates the total. A small change in discount rate or growth can create a large swing. Report its share and stress the assumptions. A multiple-based terminal value needs comparable economics and definitions; a market multiple is not independent proof of intrinsic value."
            ],
            "example": "FCFF is 50 in year 1 and 55 in year 2. At WACC 10% and perpetual growth 2%, year-3 FCFF is 56.1; terminal value at year 2 is 56.1/.08 = 701.25. EV = 50/1.1 + (55+701.25)/1.21 = 670.45. Add cash 40 and subtract debt 200: simplified equity value 510.45.",
            "transfer": "Recompute EV at 12% WACC and 2% growth. Calculate the present value of terminal value as a share of EV and explain why the result is fragile.",
            "tutor": {
              "question": "Why is next-year FCFF used in the terminal numerator?",
              "hints": [
                "Place the terminal valuation date on a timeline.",
                "A growing perpetuity values payments beginning one period after that date."
              ],
              "response": "At the end of year 2 the first perpetual payment is year 3. Using year 2 cash flow without growth shifts the modeled stream."
            }
          }
        ]
      },
      {
        "id": "course-14-m3",
        "title": "Valuation judgment",
        "lessons": [
          {
            "id": "c14-value",
            "title": "Sensitivity, scenarios and capital discipline",
            "minutes": 30,
            "body": [
              "A valuation is a conditional model, not a precise fact about price. State base-case assumptions and plausible alternatives. A sensitivity table changes one or two numerical parameters; a strategic scenario changes operating drivers consistently. Do not treat three arbitrary growth rates as a full scenario analysis.",
              "Value creation requires returns above the relevant cost of capital on incremental investment. Growth that requires excessive reinvestment can destroy value even while revenue and accounting profit increase. Relate margin, turnover, return on invested capital and reinvestment needs rather than projecting growth independently of resources.",
              "Compare capital allocation options using incremental cash flows, strategic fit, risk and implementation constraints. An acquisition with apparent positive synergy may still destroy acquirer value if the purchase premium and integration costs exceed the benefit. Keep stand-alone value, synergy value and price separate.",
              "An investment-committee memo should show assumptions, calculation checks, terminal dependence, downside and information gaps. A strong analyst explains what would falsify the recommendation. Independent validation of forecasts and external comparables helps, but neither eliminates uncertainty or substitutes for due diligence."
            ],
            "example": "A business has stand-alone value 500. Integration-adjusted synergy has PV 80; proposed price is 620. Total value is 580, so the acquirer overpays 40 before other costs. A price of 550 leaves 30 of net value under the same assumptions. Positive synergy does not justify any premium.",
            "transfer": "Write an acquisition decision rule with a maximum price and a downside integration case. Separate a valuation estimate from authority to execute a transaction.",
            "tutor": {
              "question": "Can faster growth lower enterprise value?",
              "hints": [
                "Ask how much incremental investment supports the growth.",
                "Compare incremental return on capital with its opportunity cost."
              ],
              "response": "Yes. Growth that earns less than the cost of capital can consume more value in reinvestment than it creates in future cash flows."
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
          "prompt": "EBIT 100, tax 25%, D&A 20, capex 35, NWC increase 10. FCFF?",
          "options": [
            "100",
            "50",
            "75",
            "90"
          ],
          "correct": 1,
          "explanation": "100×.75+20−35−10=50."
        },
        {
          "id": "p2",
          "prompt": "If NWC investment rises by another 15, FCFF becomes:",
          "options": [
            "65",
            "50",
            "35",
            "15"
          ],
          "correct": 2,
          "explanation": "Additional operating investment consumes 15 cash; 50−15=35."
        },
        {
          "id": "p3",
          "prompt": "Year-2 FCFF 55, perpetual growth 2%, WACC 10%. Terminal value at year 2?",
          "options": [
            "701.25",
            "687.5",
            "550",
            "56.1"
          ],
          "correct": 0,
          "explanation": "Next-year FCFF 55×1.02=56.1; divide by .10−.02=.08."
        },
        {
          "id": "p4",
          "prompt": "EV 670.45, cash 40, debt 200. Simplified equity value?",
          "options": [
            "910.45",
            "670.45",
            "430.45",
            "510.45"
          ],
          "correct": 3,
          "explanation": "670.45+40−200=510.45."
        },
        {
          "id": "p5",
          "prompt": "Stand-alone value 500, synergy PV 80, price 620. Acquirer net value?",
          "options": [
            "+80",
            "−40",
            "+120",
            "+40"
          ],
          "correct": 1,
          "explanation": "500+80−620=−40."
        },
        {
          "id": "p6",
          "prompt": "Standard growing-perpetuity formula requires:",
          "options": [
            "Growth exceeds WACC",
            "Growth equals WACC",
            "WACC greater than growth",
            "No reinvestment ever"
          ],
          "correct": 2,
          "explanation": "The perpetual sum converges only when discount rate exceeds growth under the model."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "EBIT 120, tax 25%, D&A 25, capex 40, NWC increase 15. FCFF?",
          "options": [
            "60",
            "90",
            "120",
            "30"
          ],
          "correct": 0,
          "explanation": "120×.75+25−40−15=60."
        },
        {
          "id": "e2",
          "prompt": "Next-year FCFF 60, WACC 12%, growth 2%. Terminal value at current terminal date?",
          "options": [
            "500",
            "720",
            "600",
            "300"
          ],
          "correct": 2,
          "explanation": "60/(.12−.02)=600."
        },
        {
          "id": "e3",
          "prompt": "EV 900, nonoperating cash 100, debt 350, no other claims. Equity?",
          "options": [
            "1,350",
            "650",
            "450",
            "900"
          ],
          "correct": 1,
          "explanation": "900+100−350=650."
        },
        {
          "id": "e4",
          "prompt": "Growth earns less than cost of capital and needs reinvestment. It can:",
          "options": [
            "Always raise value",
            "Eliminate funding needs",
            "Guarantee margin gains",
            "Destroy value"
          ],
          "correct": 3,
          "explanation": "Incremental investment can cost more than the present value of its returns."
        },
        {
          "id": "e5",
          "prompt": "For an FCFF/WACC model, subtracting interest in projected FCFF generally:",
          "options": [
            "Mixes financing and operating frameworks",
            "Is always mandatory",
            "Removes all risk",
            "Calculates revenue"
          ],
          "correct": 0,
          "explanation": "FCFF is measured before financing cash flows; consistency matters."
        }
      ],
      "written": "Use year-1 FCFF 50, year-2 55, perpetual growth 2%, cash 40 and debt 200. Calculate EV and equity at 10% and 12% WACC. In 700–900 words evaluate terminal dependence, reinvestment realism and the evidence needed before an investment committee could rely on the model.",
      "model": "At 10%, terminal value is 701.25, EV 670.45 and equity 510.45. At 12%, terminal value is 561; EV =50/1.12+(55+561)/1.2544=535.7143, equity 375.7143. Most value comes from the terminal period. The assumed stable growth requires sustainable margins, reinvestment and risk; a small WACC change materially alters equity. Additional claims and nonoperating assets can change the bridge.",
      "rubric": [
        "Cash-flow definitions and timing are consistent.",
        "Valuation and equity bridge are reproducible.",
        "Growth and terminal assumptions have economic support.",
        "Recommendation reflects uncertainty and downside."
      ]
    },
    "portfolio": {
      "title": "Corporate valuation investment memorandum",
      "prompt": "Build a five-year fictional corporate DCF and a 1,200-word investment-committee memorandum. Use a dated public annual report only as an explicitly cited benchmark, not as invented company forecasts.",
      "minutes": 180,
      "requirements": [
        "Show revenue, EBIT, tax, reinvestment, NWC balances and FCFF with annual timing.",
        "Calculate enterprise and equity value and disclose every bridge item.",
        "Provide a WACC/growth sensitivity, an adverse operating scenario and terminal-value share.",
        "Defend a conditional allocation decision with evidence gaps and a maximum acceptable price where relevant."
      ],
      "rubric": [
        "Cash-flow definitions and timing are consistent.",
        "Valuation and equity bridge are reproducible.",
        "Growth and terminal assumptions have economic support.",
        "Recommendation reflects uncertainty and downside."
      ]
    },
    "readings": [
      {
        "title": "MIT Sloan: graduate economics supporting analysis",
        "url": "https://ocw.mit.edu/courses/15-010-economic-analysis-for-business-decisions-fall-2004/",
        "task": "Use the cost-analysis materials and problem sets to test your reinvestment and opportunity-cost assumptions. Write 500 words connecting operating cost behavior to an investment forecast.",
        "minutes": 120
      }
    ],
    "prerequisites": [
      "course-02",
      "course-07",
      "course-08"
    ]
  }
});
