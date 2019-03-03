const vscode = require('vscode')

function escape_special_characters(s)
{
	return s.replace(/[^A-Za-z0-9]/g, '\\$&')
}

function count_occurrences()
{
	let editor = vscode.window.activeTextEditor
	let selection = editor.selection
	let text = editor.document.getText(selection)

	if(!text)
	{
		return false
	}

	const regex = new RegExp(`\\b${escape_special_characters(text)}(?![\\w-])`, "g")
	let num_matches = 0

	for(let i=0; i < editor.document.lineCount; i++)
	{
		num_matches += ((editor.document.lineAt(i).text || '').match(regex) || []).length
	}

	let s = "occurrences"

	if(num_matches === 1)
	{
		s = "occurrence"
	}

	vscode.window.showInformationMessage(`${num_matches} ${s}`)
}

function activate(context) 
{
	let disposable = vscode.commands.registerCommand('extension.count', function() 
	{
		count_occurrences()
	})

	context.subscriptions.push(disposable)
}

exports.activate = activate

function deactivate() {}

module.exports = 
{
	activate,
	deactivate
}
