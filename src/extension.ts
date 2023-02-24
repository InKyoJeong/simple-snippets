import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "simple-snippets.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from simple-snippets!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
