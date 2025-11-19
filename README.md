# WEEK 1 LEARNINGS

## Day 1

On day 1 i explored the system’s Node.js environment and NVM setup.

### System Exploration
- Documented OS version, active shell, Node binary path, NPM global path, and PATH entries related to Node/NPM.
- Verified Node and NPM installation details.

### NVM Setup
- Installed NVM and configured the environment.
- Switched between Node LTS and Latest versions to confirm proper version management.

### Introspection Script
Created `introspect.js` to output:
- OS details  
- Architecture and CPU info  
- Memory and uptime  
- Logged-in user  
- Node binary location

### Stream vs Buffer Test
- Generated a 50MB+ test file.
- Compared `fs.readFile` (Buffer) vs `fs.createReadStream` (Stream).
- Measured execution time and memory usage for both approaches.

### Screenshots
- ***OS Version***  
  ![OS version](./day1/image-1.png)

- ***Current Shell***  
  ![Current shell](./day1/image.png)

- ***Node Binary Path***  
  ![Node binary path](./day1/image-4.png)

- ***NPM Global Path*** 
  ![NPM global installation path](./day1/image-5.png)

- ***Node/NPM in PATH***  
  ![All PATH entries that include node or npm](./day1/image-6.png)

- ***NVM Installation***  
  ![Install & use NVM](./day1/image-2.png)

- ***Switching Node Versions***  
  ![Switching Node versions](./day1/image-3.png)

## Day 2

On day 2 i built a word-stats CLI tool and tested its performance with concurrency.

### Tasks

1. **Create a Big Corpus File**  
   - Generated a text file containing more than 200,000 words.

2. **Build CLI Command**  
   Used the following command to analyze word statistics:  
   `node wordstat.js --file corpus.txt --top 10 --minLen 5 --unique`

3. **CLI Output Includes**  
   - Total words  
   - Unique words  
   - Longest word  
   - Shortest word  
   - Top N repeated words  

4. **Add Concurrency**  
   - Split the input file into chunks  
   - Processed chunks in parallel using `Promise.all` or `worker_threads`

5. **Benchmarking**  
   - Tested concurrency levels: **1, 4, 8**  
   - Logged execution time for comparison

## Day 3

On Day 3 i worked with Git, focusing on commits, bisecting, merging, and conflict resolution.

### Tasks

1. **Create a Repository with 8+ Commits**  
   - Intentionally introduced a bug in commit 4.

2. **Use git bisect**  
   - Detected the faulty commit using `git bisect`.

3. **Fix the Bug and git revert**  
   - Fixed the bug and used `git revert` to undo only the buggy commit (not `git reset`).

4. **Use Stash Workflow**  
   - Ran `git stash`, followed by `git pull` and `git stash apply` to manage local changes.

5. **Merge Conflict Resolution**  
   - Using two clones of the repo, edited the same line in the same file.
   - Merged and resolved the conflict, keeping both changes from different branches.

### Screenshots

- **Terminal Logs for Merge Conflicts**  
  ![terminal logs for merge conflicts](./day3/image-1.png)

- **Screenshot of the Merge Conflict**  
  ![screenshot of the merge conflict](./day3/image-2.png)

- **Resolving the Conflict**  
  ![resolving the conflict](./day3/image-3.png)

- **Resolved the Conflict, Keeping Both Changes**  
  ![resolved the conflict and kept both the changes from different branches](./day3/image-4.png)

- **Graph of Branches After Merging**  
  ![graph of the branches after merging the demo branch into main branch](./day3/image-5.png)

