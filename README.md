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
