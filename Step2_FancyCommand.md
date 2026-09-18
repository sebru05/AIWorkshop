# Step 2: Create Your Fancy Command

## 1. Fancy Command Specification

### Purpose

My fancy command is called `fancy.js`. It combines the functionality of `grep` and `head`.

It searches a file for a specified pattern and displays the first 10 matching lines.

### Command Syntax

```bash
node fancy.js <PATTERN> <FILENAME>
### Expected Behavior

The program reads the specified file, searches each line for the pattern, and displays matching lines. It stops after displaying the first 10 matching lines.

### Edge Cases

1. **Missing arguments:** If the user does not provide the required pattern and filename, the program displays a missing argument message and usage instructions.

2. **No matching lines:** If the pattern does not appear in the file, the program displays no matching lines.

## 2. Testing

### Test Case 1: INFO

Command:

```bash
node fancy.js INFO server.log

Expected output:

The first 10 lines containing `INFO`.

Actual output:

7 matching `INFO` lines were displayed.

### Test Case 2: ERROR

Command:

```bash
node fancy.js ERROR server.log
Expected output:

The first 10 lines containing `ERROR`.

Actual output:

3 matching `ERROR` lines were displayed.
### Edge Case Test 1: Missing Arguments

Command:

```bash
node fancy.js

Expected output:

The program should display a missing argument message and usage instructions.

Actual output:

The program displayed `Missing Argument` and the usage instructions.

### Edge Case Test 2: No Matching Lines

Command:

```bash
node fancy.js XYZ server.log

Expected output:

The program should display no matching lines.

Actual output:

No matching lines were displayed, and the program returned to the terminal prompt.

## 3. Testing Reflection

During testing, I first tried running `fancy.js` directly and received a command-not-found error. I corrected this by running the program with Node.js using `node fancy.js`.

I tested the command with both `INFO` and `ERROR` patterns and verified that the output matched the expected results.

I used AI to help suggest test scenarios and identify possible edge cases. I then ran the tests myself in Codio and verified the results.