/* Original accounting pilot sequences. */
Object.assign(window.BAContent,{
  "course-07": {
    "status": "authored pilot sequence",
    "description": "Trace transactions through accrual financial statements and evaluate recognition, estimates and cash-flow reconciliation. All examples are simplified, fictional and pre-tax unless stated.",
    "outcomes": [
      "Record balanced journal entries and adjusting entries.",
      "Reconcile profit, operating cash flow and ending balances.",
      "Challenge revenue quality and accounting estimates using evidence."
    ],
    "modules": [
      {
        "id": "course-07-m1",
        "title": "Transaction mechanics",
        "lessons": [
          {
            "id": "c07-double",
            "title": "Double-entry accounting and the trial balance",
            "minutes": 30,
            "body": [
              "Double-entry accounting keeps the accounting equation balanced by recording equal debits and credits. Debits increase assets and expenses; credits increase liabilities, equity and revenue. A debit is not inherently good or bad, and “credit” does not always mean cash received. Each entry requires the affected accounts and a transaction rationale.",
              "Consider a manufacturer that issues equity, borrows, buys equipment and purchases inventory. Equity issuance credits contributed capital; borrowing credits debt. Neither is revenue. Equipment and inventory are assets when acquired under the simplified assumptions. Cash decreases only when paid; a purchase on credit creates a payable.",
              "When inventory is sold, record both the sale and the cost of inventory leaving the company. A credit sale debits receivables and credits revenue; the matching cost entry debits cost of goods sold and credits inventory. Collections later debit cash and credit receivables without recognizing the same revenue again.",
              "A trial balance verifies that debit totals equal credit totals, but does not prove every account, amount or timing is correct. Omitting a balanced transaction or posting to the wrong asset can still leave it balanced. Internal controls, reconciliations and supporting documentation address errors that arithmetic checks cannot find."
            ],
            "example": "A company starts with equity cash 100 and borrows 50. It buys equipment for cash 60 and inventory on credit 40. It sells half the inventory on credit for 35. Cash is 90; equipment 60; receivables 35; inventory 20. Assets 205 equal debt 50 + payables 40 + equity 115. Profit is revenue 35 minus COGS 20 = 15.",
            "transfer": "Write every debit and credit in the example, then record collection of 25 and payment of 10 to suppliers. Reconcile the resulting balance sheet.",
            "tutor": {
              "question": "Why does collection of a receivable not create revenue again?",
              "hints": [
                "Identify when the sale was recognized.",
                "Collection exchanges one asset for another."
              ],
              "response": "Revenue was credited at the sale. Collection increases cash and decreases receivables by the same amount, with no new earnings."
            }
          }
        ]
      },
      {
        "id": "course-07-m2",
        "title": "Accrual and adjustment",
        "lessons": [
          {
            "id": "c07-accrual",
            "title": "Adjustments, depreciation and recognition",
            "minutes": 30,
            "body": [
              "Accrual adjustments assign activity to the correct reporting period. Prepaid services become expenses as consumed; accrued wages become expenses before payment; customer cash received before delivery is initially a liability in the simplified case. The precise recognition requirements depend on the accounting framework and contract facts. A signed order alone is not sufficient evidence of earned revenue.",
              "Depreciation allocates an asset’s depreciable amount over its estimated useful life. Straight-line annual depreciation equals cost less residual value divided by useful years. It is a systematic allocation, not a market-value appraisal or a cash reserve. Changes in useful life or residual estimates change future expense and require support.",
              "Estimates such as credit losses, returns and impairment affect reported income and asset values. Optimistic assumptions can improve current earnings without improving cash generation. Analyze the underlying receivables aging, customer payment behavior and estimate history rather than inferring manipulation from one ratio.",
              "Cutoff controls test whether revenue, inventory and liabilities belong in the stated period. Evidence may include delivery terms, acceptance records and supplier invoices received after year-end. A transaction can be correctly valued but recorded in the wrong period. Reconcile subsidiary records to the general ledger and investigate unusual late adjustments."
            ],
            "example": "Equipment costs 60 with residual 0 and five-year life: annual depreciation is 12. Starting from the previous example’s 15 profit, depreciation 12, accrued wages 4 and consumed prepaid insurance 2 reduce profit to −3. Wages create a liability before cash payment. Depreciation reduces equipment net book value, not cash.",
            "transfer": "A customer pays 24 for twelve months of service beginning October 1. Show the liability and revenue at December 31 under equal monthly delivery. State the delivery assumption.",
            "tutor": {
              "question": "Would extending equipment life from five to ten years create cash?",
              "hints": [
                "Recalculate annual depreciation.",
                "Separate reported expense from cash payment."
              ],
              "response": "Annual expense falls from 12 to 6, but no new cash arrives. Taxes may differ in practice; the estimate needs operational support."
            }
          }
        ]
      },
      {
        "id": "course-07-m3",
        "title": "Cash-flow reconciliation",
        "lessons": [
          {
            "id": "c07-reconcile",
            "title": "From income to cash and quality of earnings",
            "minutes": 30,
            "body": [
              "The indirect operating cash-flow method starts from net income and adjusts for noncash items and operating asset/liability changes. Add back depreciation in a simplified model. Subtract increases in receivables and inventory; add increases in operating payables and accrued operating expenses. Check classifications under the applicable reporting framework.",
              "Investing cash flows include capital expenditure in these examples; financing includes borrowing, equity issuance and debt principal repayment. Cash-flow classification of items such as interest can differ by framework, so inspect the company policy before comparing peers. Do not assume every balance-sheet change is an operating cash-flow adjustment.",
              "Acquisitions, foreign exchange, disposals and noncash transactions can make a simple year-end balance comparison diverge from a cash-flow statement. Use disclosed reconciliations and notes. A clean mathematical bridge is necessary, but it is not proof of recognition quality or collectability.",
              "Earnings-quality analysis asks whether reported results are sustainable and supported by economic activity. Compare growth in revenue and receivables, cash conversion and recurring adjustments across consistent periods. Investigate unusual changes with alternative explanations. A rigorous conclusion states evidence limits rather than making allegations from a ratio."
            ],
            "example": "Net income 50, depreciation 12, receivables increase 15, inventory increases 8 and operating payables increase 6. Operating cash flow = 50+12−15−8+6 = 45. Capex 30, borrowing 20 and debt repayment 10 give net cash increase 25. Opening cash 40 therefore ends at 65, ignoring other flows.",
            "transfer": "Reconcile the same firm if receivables instead rise 35. Explain the effect on profit, operating cash and ending cash, holding other assumptions constant.",
            "tutor": {
              "question": "Why does adding depreciation back not make equipment free?",
              "hints": [
                "Locate the original or replacement capital outlay.",
                "Depreciation is noncash this period; capex remains a cash flow."
              ],
              "response": "The adjustment removes a noncash expense from operating cash, while actual asset investment remains in investing cash. Replacement needs can still be substantial."
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
          "prompt": "Borrow 50 in cash. Correct entry?",
          "options": [
            "Debit revenue, credit cash",
            "Debit cash, credit debt",
            "Debit debt, credit revenue",
            "Debit expense, credit equity"
          ],
          "correct": 1,
          "explanation": "Cash and debt both rise; borrowing is financing, not revenue."
        },
        {
          "id": "p2",
          "prompt": "Sell inventory costing 20 on credit for 35. Gross profit?",
          "options": [
            "35",
            "20",
            "15",
            "55"
          ],
          "correct": 2,
          "explanation": "Revenue 35 minus cost of goods sold 20 = 15."
        },
        {
          "id": "p3",
          "prompt": "Collect 25 of existing receivables. Immediate revenue effect?",
          "options": [
            "+25",
            "−25",
            "+50",
            "Zero"
          ],
          "correct": 3,
          "explanation": "Collection exchanges receivables for cash; the sale was already recognized."
        },
        {
          "id": "p4",
          "prompt": "Equipment cost 60, zero residual, life five years. Annual straight-line depreciation?",
          "options": [
            "12",
            "5",
            "60",
            "10"
          ],
          "correct": 0,
          "explanation": "(60−0)/5 = 12."
        },
        {
          "id": "p5",
          "prompt": "Customer prepays 24 for service Oct–Sep. Revenue by Dec 31, equal monthly delivery?",
          "options": [
            "24",
            "18",
            "6",
            "0"
          ],
          "correct": 2,
          "explanation": "Three of twelve months delivered: 24×3/12=6; remaining liability is 18."
        },
        {
          "id": "p6",
          "prompt": "NI 50, depreciation 12, AR +15, inventory +8, AP +6. CFO?",
          "options": [
            "71",
            "45",
            "35",
            "50"
          ],
          "correct": 1,
          "explanation": "50+12−15−8+6=45."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "Issuing equity for 80 cash immediately changes:",
          "options": [
            "Revenue +80",
            "Debt +80",
            "Cash and contributed equity +80",
            "Profit +80"
          ],
          "correct": 2,
          "explanation": "An owner contribution is financing, not operating revenue."
        },
        {
          "id": "e2",
          "prompt": "Equipment 100, residual 10, life five years. Depreciation?",
          "options": [
            "18",
            "20",
            "22",
            "10"
          ],
          "correct": 0,
          "explanation": "(100−10)/5=18."
        },
        {
          "id": "e3",
          "prompt": "Accrue unpaid wages 7. What happens?",
          "options": [
            "Cash falls 7",
            "Expense and liability rise 7",
            "Revenue rises 7",
            "Assets rise 7"
          ],
          "correct": 1,
          "explanation": "Recognize wages expense and wages payable before paying cash."
        },
        {
          "id": "e4",
          "prompt": "NI 80, depreciation 18, AR +20, inventory +5, AP +12. CFO?",
          "options": [
            "135",
            "65",
            "105",
            "85"
          ],
          "correct": 3,
          "explanation": "80+18−20−5+12=85."
        },
        {
          "id": "e5",
          "prompt": "A balanced trial balance proves:",
          "options": [
            "No omitted transactions",
            "Perfect timing",
            "Equal posted debits and credits",
            "Correct valuation"
          ],
          "correct": 2,
          "explanation": "Arithmetic balance does not establish completeness or correct account selection."
        }
      ],
      "written": "A manufacturer reports NI 80, depreciation 18, receivables increase 20, inventory increase 5 and operating payables increase 12. Capex is 60, borrowing 25 and debt repayment 10; opening cash is 30. Reconcile operating cash and ending cash. In 600–800 words evaluate a proposal to extend useful lives to raise earnings, identify supporting evidence and explain why cash-flow arithmetic alone cannot verify revenue quality.",
      "model": "CFO is 85. Net cash change =85−60+25−10=40; ending cash 70. A longer life reduces annual depreciation prospectively under an appropriate estimate change but does not itself create operating receipts. Inspect maintenance, utilization, retirement and engineering evidence. Revenue quality also requires delivery, acceptance, collectability and cutoff support. Accounting treatment depends on the framework and facts.",
      "rubric": [
        "Entries balance and closing statements reconcile.",
        "Accrual timing and estimates follow stated assumptions.",
        "Cash effects are separated from earnings effects.",
        "Evidence supports judgments and alternative explanations."
      ]
    },
    "portfolio": {
      "title": "Three-statement accounting reconstruction",
      "prompt": "Construct a balanced, fictional corporate transaction ledger and linked statements; then compare one estimate policy with a dated public annual-report disclosure.",
      "minutes": 180,
      "requirements": [
        "Record at least ten transactions including borrowing, inventory, credit sale, collection, capex, depreciation, prepaid service and accrued wages.",
        "Produce a closing balance sheet, income statement and cash-flow reconciliation that agree.",
        "Stress a slower-collection case and an estimated-useful-life change separately.",
        "Write a 1,000-word accounting-quality memo with cited policy evidence and limits."
      ],
      "rubric": [
        "Entries balance and closing statements reconcile.",
        "Accrual timing and estimates follow stated assumptions.",
        "Cash effects are separated from earnings effects.",
        "Evidence supports judgments and alternative explanations."
      ]
    },
    "readings": [
      {
        "title": "Financial accounting: transaction analysis and adjustments",
        "url": "https://openstax.org/books/principles-financial-accounting/pages/1-why-it-matters",
        "task": "Read chapters 3–4 on transaction analysis and adjustments, and chapter 14 on equity. Reproduce journal entries for five transactions and explain why a balanced entry can still be wrong.",
        "minutes": 150
      }
    ],
    "prerequisites": [
      "course-02",
      "course-06"
    ]
  },
  "course-08": {
    "status": "authored pilot sequence",
    "description": "Use managerial cost information for corporate decisions, control and performance evaluation. Avoid allocating costs as a substitute for analyzing what a decision actually changes.",
    "outcomes": [
      "Distinguish product costing from relevant-cost analysis.",
      "Reconcile flexible-budget variances.",
      "Evaluate special orders, capacity constraints and managerial incentives."
    ],
    "modules": [
      {
        "id": "course-08-m1",
        "title": "Relevant costs",
        "lessons": [
          {
            "id": "c08-relevant",
            "title": "Contribution, sunk costs and avoidable cost",
            "minutes": 30,
            "body": [
              "Managerial accounting supports internal decisions; financial reporting follows external rules. A product may receive allocated overhead for reporting even when that allocation does not change if the product is discontinued. Relevant costs and revenues differ between the alternatives. Sunk costs do not; opportunity costs may be relevant even without a ledger charge.",
              "Classify each item by behavior, traceability and avoidability. Fixed does not mean unavoidable: a cancellable dedicated lease may be avoidable over the decision horizon. Variable does not automatically mean incremental if a capacity commitment is already paid and cannot be repurposed. The horizon and contract matter.",
              "A special order at a low price can be worthwhile with idle capacity if incremental revenue exceeds incremental cost and there are no harmful effects on normal customers. At full capacity, include contribution displaced from regular sales. Consider channel conflict, future pricing and contractual constraints; a one-period numeric answer is not a complete strategy.",
              "A shutdown decision should compare avoidable losses with contribution forfeited, closure costs and future option value. An overhead allocation can make a profitable contributor appear unprofitable. Conversely, keeping every positive-contribution unit may still be unsustainable if the corporation cannot cover its shared fixed costs in total."
            ],
            "example": "A division earns revenue 10 million, variable cost 6, avoidable fixed cost 1 and allocated shared overhead 4. Reported profit is −1. Closing it saves 7 but loses 10, reducing group profit by 3 if shared overhead persists. A decision that removes the shared cost too would need a different calculation.",
            "transfer": "Evaluate an order for 10,000 units at price 30 with variable cost 22 and order-specific setup 20,000. First assume idle capacity, then 10,000 displaced regular units with contribution 12 each.",
            "tutor": {
              "question": "Why can closing a reported loss-making division reduce group profit?",
              "hints": [
                "Identify which costs actually disappear.",
                "Compare lost contribution with avoidable fixed cost."
              ],
              "response": "Allocated shared overhead may remain. Here 4 million contribution exceeds 1 million avoidable fixed costs, so closure destroys 3 million profit."
            }
          }
        ]
      },
      {
        "id": "course-08-m2",
        "title": "Budgeting and control",
        "lessons": [
          {
            "id": "c08-variance",
            "title": "Flexible budgets and variance bridges",
            "minutes": 30,
            "body": [
              "A static budget uses planned volume; a flexible budget recalculates variable revenue and cost at actual activity using budgeted rates. Compare actual results with the flexible budget to separate rate or spending effects from volume effects. The comparison is meaningful only if cost behavior assumptions fit the operating range.",
              "For materials, a common convention measures price variance as actual quantity used times actual minus standard price, and usage variance as actual minus standard quantity allowed for actual output times standard price. Some systems measure price variance at purchase quantity instead; label the convention and reconcile inventory effects.",
              "An unfavorable variance is not automatically managerial failure. Higher-quality input can cost more but reduce scrap, warranty and downtime. A favorable labor-rate variance can hide inexperienced staff and lower productivity. Analyze linked variances and operational data before assigning responsibility.",
              "Budget control can produce gaming: delaying maintenance, building unnecessary inventory or negotiating easy targets. Pair financial variances with service, quality, safety and long-term capacity indicators. A useful review distinguishes controllable drivers, forecast errors and deliberate strategic tradeoffs."
            ],
            "example": "Standard input is 2 kg per unit at 5 per kg. Actual output is 1,000 units, using 2,200 kg at 6. Allowed quantity 2,000 kg costs 10,000. Actual cost 13,200 gives an unfavorable 3,200 variance: price 2,200×(6−5)=2,200; usage (2,200−2,000)×5=1,000.",
            "transfer": "Reconcile a labor case: standard 3 hours per unit at 20; actual output 500 units; actual 1,600 hours at 22. Explain what operational evidence is needed before blaming supervisors.",
            "tutor": {
              "question": "Why compare usage against standard quantity for actual output?",
              "hints": [
                "Separate production volume from efficiency.",
                "Use actual output times standard input per unit."
              ],
              "response": "A static quantity for a different output level confuses volume with input efficiency. The flexible allowance isolates usage relative to actual activity."
            }
          }
        ]
      },
      {
        "id": "course-08-m3",
        "title": "Capacity and incentives",
        "lessons": [
          {
            "id": "c08-capacity",
            "title": "Constraints, transfer prices and performance",
            "minutes": 30,
            "body": [
              "When one scarce resource limits output, rank products by contribution per unit of that constrained resource in the simple single-constraint case. Contribution per product unit can give the wrong order. Confirm demand limits and that other resources are not binding. Multiple constraints may require a more advanced optimization model.",
              "An internal transfer price shifts reported divisional profit but does not itself create group profit. With spare capacity, incremental cost may establish an economic lower bound before strategic and policy factors. At full capacity, include the opportunity cost of external sales displaced. International tax and legal requirements require separate specialist analysis.",
              "Return on investment can discourage a manager from approving a positive-NPV project that lowers the division’s average return. Residual income subtracts a capital charge from operating profit and can reduce this conflict under suitable assumptions. Neither measure replaces cash-flow valuation or risk review.",
              "Decentralization works better when decision rights, information and incentives align. Evaluate managers on factors they can influence while preserving accountability for cross-unit consequences. A corporation should not let locally favorable transfer-price or budget outcomes obscure enterprise value, service quality or resilience."
            ],
            "example": "Product A contributes 60 per unit and needs 3 machine hours; B contributes 50 and needs 2 hours. A earns 20 per scarce hour, B 25. With 1,000 hours and sufficient demand, B provides 25,000 contribution versus A 20,000. If B demand is limited to 300 units, use 600 hours on B then remaining 400 on A subject to whole-unit feasibility.",
            "transfer": "A division with 20 profit on 100 invested capital can add a project earning 3 on 20 capital at a 10% capital charge. Compute the change in ROI and residual income; explain why a manager might resist.",
            "tutor": {
              "question": "Why does the highest unit contribution not always win?",
              "hints": [
                "Find the bottleneck.",
                "Divide contribution by bottleneck consumption."
              ],
              "response": "The constrained resource has opportunity cost. A lower-contribution unit may use much less scarce capacity and create more total contribution."
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
          "prompt": "Division revenue 10, variable cost 6, avoidable fixed 1, shared overhead allocation 4; shared overhead persists on closure. Group profit effect of closure?",
          "options": [
            "+1",
            "−3",
            "+4",
            "−1"
          ],
          "correct": 1,
          "explanation": "Lose contribution 4 and save avoidable fixed 1: −3."
        },
        {
          "id": "p2",
          "prompt": "Idle-capacity order: 10,000 units, price 30, variable cost 22, setup 20,000. Incremental profit?",
          "options": [
            "80,000",
            "−20,000",
            "60,000",
            "300,000"
          ],
          "correct": 2,
          "explanation": "10,000×(30−22)−20,000=60,000."
        },
        {
          "id": "p3",
          "prompt": "Same order displaces 10,000 regular units contributing 12 each. Net effect?",
          "options": [
            "−60,000",
            "60,000",
            "180,000",
            "0"
          ],
          "correct": 0,
          "explanation": "60,000 less lost regular contribution 120,000 = −60,000."
        },
        {
          "id": "p4",
          "prompt": "2,200 kg used, actual price 6, standard price 5. Price variance at usage?",
          "options": [
            "1,000 unfavorable",
            "2,000 favorable",
            "3,200 unfavorable",
            "2,200 unfavorable"
          ],
          "correct": 3,
          "explanation": "2,200×(6−5)=2,200 unfavorable."
        },
        {
          "id": "p5",
          "prompt": "Allowed 2,000 kg, actual 2,200, standard price 5. Usage variance?",
          "options": [
            "2,200 unfavorable",
            "1,000 unfavorable",
            "1,000 favorable",
            "200 unfavorable"
          ],
          "correct": 1,
          "explanation": "(2,200−2,000)×5=1,000 unfavorable."
        },
        {
          "id": "p6",
          "prompt": "A contributes 60 using 3 hours; B 50 using 2 hours. Scarce-hour priority?",
          "options": [
            "A always",
            "Equal",
            "B, at 25 per hour",
            "Ignore hours"
          ],
          "correct": 2,
          "explanation": "A gives 20/hour and B 25/hour, subject to demand and other constraints."
        }
      ]
    },
    "exam": {
      "minutes": 90,
      "instructions": "Closed notes for objective questions; a basic calculator is allowed. Then complete the written case without the model reasoning. No proctoring or credential is provided.",
      "questions": [
        {
          "id": "e1",
          "prompt": "Allocated overhead that remains after closure is:",
          "options": [
            "Always saved",
            "Not an avoidable saving",
            "New revenue",
            "A variable selling cost"
          ],
          "correct": 1,
          "explanation": "Only costs that change between alternatives are relevant to the decision."
        },
        {
          "id": "e2",
          "prompt": "Standard 3 hours at 20; output 500; actual hours 1,600 at 22. Total labor variance?",
          "options": [
            "3,200 favorable",
            "2,000 unfavorable",
            "5,200 unfavorable",
            "1,600 unfavorable"
          ],
          "correct": 2,
          "explanation": "Actual 35,200 minus allowed standard 30,000 = 5,200 unfavorable."
        },
        {
          "id": "e3",
          "prompt": "In that labor case, rate variance using actual hours?",
          "options": [
            "3,200 unfavorable",
            "2,000 unfavorable",
            "5,200 favorable",
            "400 unfavorable"
          ],
          "correct": 0,
          "explanation": "1,600×(22−20)=3,200 unfavorable."
        },
        {
          "id": "e4",
          "prompt": "A manager rejects positive NPV to protect divisional average ROI. This is:",
          "options": [
            "Proof NPV is wrong",
            "A cash-flow entry",
            "Always optimal for the group",
            "An incentive conflict"
          ],
          "correct": 3,
          "explanation": "A new project may create value while reducing a high historical average ROI."
        },
        {
          "id": "e5",
          "prompt": "At full capacity, a special order must include:",
          "options": [
            "Only allocated rent",
            "Opportunity cost of displaced contribution",
            "Only sunk development cost",
            "No costs"
          ],
          "correct": 1,
          "explanation": "The order consumes capacity that could earn regular contribution."
        }
      ],
      "written": "A corporate division reports revenue 10 million, variable cost 6, avoidable fixed cost 1 and shared overhead allocation 4. Separately, an idle-capacity order offers 10,000 units at 30 with variable cost 22 and setup 20,000. In 600–800 words evaluate closure and the order, then revise the order decision if it displaces regular contribution of 12 per unit. Explain why a favorable variance is not sufficient evidence of good performance.",
      "model": "Closure reduces group profit by 3 million if the shared overhead remains. The idle-capacity order adds 60,000; at full capacity with 120,000 displaced contribution it loses 60,000. Check order-specific fixed cost, pricing spillovers, quality and future customer consequences. Variances may reflect volume, input quality or gaming and need a flexible benchmark and operational evidence.",
      "rubric": [
        "Relevant and allocated costs are distinguished correctly.",
        "Capacity and variance calculations reconcile.",
        "Behavioral and quality tradeoffs are tested.",
        "Enterprise-level recommendation follows explicit assumptions."
      ]
    },
    "portfolio": {
      "title": "Managerial decision and control pack",
      "prompt": "Build a decision pack for a fictional multinational division with two products and one constrained resource.",
      "minutes": 180,
      "requirements": [
        "Compare product rankings per unit and per constrained hour with explicit demand limits.",
        "Analyze one special order and one discontinuation with avoidable and opportunity costs.",
        "Reconcile a flexible-budget materials or labor variance and investigate linked quality effects.",
        "Write a 1,000-word recommendation including transfer-price conflicts and a balanced performance dashboard."
      ],
      "rubric": [
        "Relevant and allocated costs are distinguished correctly.",
        "Capacity and variance calculations reconcile.",
        "Behavioral and quality tradeoffs are tested.",
        "Enterprise-level recommendation follows explicit assumptions."
      ]
    },
    "readings": [
      {
        "title": "Economics: cost and production as a decision foundation",
        "url": "https://openstax.org/books/principles-economics-3e/pages/1-introduction",
        "task": "Revisit chapter 7 on cost and economic profit. Develop a table contrasting marginal cost, average cost, sunk cost and opportunity cost, with a corporate decision example for each.",
        "minutes": 120
      }
    ],
    "prerequisites": [
      "course-03",
      "course-07"
    ]
  }
});
