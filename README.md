# ITPM Assignment 1 - Test Automation

This repository contains the test automation suite for the Singlish to Sinhala chat translator application (Pixelssuite). The tests are written using Python and Playwright.

## Prerequisites
- Python 3.11 or higher
- Google Chrome installed (or Chromium)

## Installation

1. Navigate to the project folder:
   ```bash
   cd IT23183940
   ```
2. Install the required Python dependencies:
   ```bash
   pip install playwright openpyxl
   ```
3. Install Playwright browsers:
   ```bash
   playwright install
   ```

## Running the Tests

To run the automated tests and populate the Excel file with actual outputs:

```bash
python IT23183940_test_automation.py --excel "IT23183940_Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open
```

The script will launch a browser, type the Singlish inputs from the provided Excel file, capture the Sinhala transliterations from the chat interface, and update the "Actual output" and "Status" columns dynamically.

## Files included:
- `IT23183940_Assignment 1 - Test cases.xlsx`: The Excel file containing the 50 test cases.
- `IT23183940_test_automation.py`: The Playwright automation script.
- `IT23183940_Git Repo Link.txt`: Text file containing the Git repository link.
