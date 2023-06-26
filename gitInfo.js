/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is software that is used to track the different versions of a file. This is ideal for coders who are working collaboritvely and risk the potential of coding overthemselves or others. Or who simply want to work from an old version of a file."
console.log(gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is an online platform that serves as a cloud to save all of the evolving files from Git software. "
console.log(gitHubDefinition);

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = "Typing git init into your terminal will initiate a repository."
console.log(gitInitDefinition);

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = "Typing git clone into your terminal is used to copy a repository in to another location."
console.log(gitCloneDefinition);

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = "Typing git status in to your terminal will show the state of the repository and staging area. You can see the changes that are saved and unsaved."
console.log(gitStatusDefinition);

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "Git add will add a change in the working directory to the staging area. It allows us to keep making cahnges to the local repository."
let gitAddCode = "git add ."
console.log(gitAddDefinition);
console.log(gitAddCode);
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = "Git commit will save the version of the files changes to keep as a safe version that can be revisited."
let gitCommitCode = "git commit -m 'initial commit'"
console.log(gitCommitDefinition);
console.log(gitCommitCode);
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = "The git push command will upload to local repository to a remote repository. We use it to take our files to GitHub."
console.log(gitPushDefinition);