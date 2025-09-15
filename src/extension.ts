import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Character Counter Extension is now active!');

    const disposable = vscode.commands.registerCommand('extension.countCharacters', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Нет активного редактора!');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (text.length === 0) {
            vscode.window.showInformationMessage('Выделите текст для подсчета символов');
            return;
        }

        const charCount = text.length;
        vscode.window.showInformationMessage(`Количество символов: ${charCount}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
