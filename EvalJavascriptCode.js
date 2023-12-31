// Name: Eval JavaScript
// ID: evalJavaScript
// Description: Evaluate JavaScript code.
// By: Stiwen02 <https://scratch.mit.edu/users/Stiwen02/>

(function (Scratch) {
  "use strict";
  const icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAIAAACDr150AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAE4mSURBVHhe7d0HnBTl/cfx7+5eP+rRm4CACigqFtTYe6+xl9hiiRo1JjGaaDTRJMbYY+zY/tbYeywgKjZAaSJK7/UoR7u6+39+M8N5KiDl7mZn9/N+bS4zsydws3Pzfdo8Tyw1RQAAoJHFg/8HAACNiAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEAICGACAEBDAAACEgAAGACAEBDAAACEggAEACAEBDABACAhgAABCQAADABACAhgAgBAQwAAAhIAABgAgBAQwAAAhIIABAAgBAQwAQAgIYAAAQkAAAwAQAgIYAIAQEMAAAISAAAYAIAQEMAAAISCAAQAIAQEMAEAICGAAAEJAAAMAEIJYakqwBQAIWazO1zXy30p5X9em9t11fxvCRgADQFpIpZRMeqGZ+t7XWnXz9HsZ7e3Yl9h3X2Puq/dC2iKAAaBx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";
  let evalErrorVar = false;
  let errorLastEvalVar = false;
  let lastEvalError = null;
  class AdvancedNumericalEncoding {
    getInfo() {
      return {
        id: "evalJavaScript",
        name: "Eval JavaScript",
        blockIconURI: icon,
        blocks: [
          {
            opcode: "evalCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "eval [CODE]",
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "console.log(\"apple\")",
              },
            },
          },
          {
            opcode: "evalReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "eval [CODE]",
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\"apple\"",
              },
            },
          },
          '---',
          {
            opcode: "evalError",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "eval error?"
          },
          {
            opcode: "errorLastEval",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "error since last eval?"
          },
          {
            opcode: "resetEvalError",
            blockType: Scratch.BlockType.COMMAND,
            text: "reset eval error"
          },
          '---',
          {
            opcode: "evalErrorName",
            blockType: Scratch.BlockType.REPORTER,
            text: "last eval error's name"
          },
          {
            opcode: "evalErrorMessage",
            blockType: Scratch.BlockType.REPORTER,
            text: "last eval error's message"
          },
          {
            opcode: "evalErrorStack",
            blockType: Scratch.BlockType.REPORTER,
            text: "last eval error's stack"
          },
          {
            opcode: "evalErrorToString",
            blockType: Scratch.BlockType.REPORTER,
            text: "last eval error to string"
          },
          {
            opcode: "evalErrorToJSON",
            blockType: Scratch.BlockType.REPORTER,
            text: "last eval error to JSON"
          }
        ],
      };
    }

    evalCommand(args) {
      errorLastEvalVar = false;
      try {
        eval(args.CODE.toString());
      } catch (exception) {
        evalErrorVar = true;
        errorLastEvalVar = true;
        lastEvalError = exception;
      }
    }

    evalReporter(args) {
      let result = "";
      errorLastEvalVar = false;
      try {
        result = eval(args.CODE.toString());
      } catch (exception) {
        result = "";
        evalErrorVar = true;
        errorLastEvalVar = true;
        lastEvalError = exception;
      }
      return result;
    }

    evalError() {
      return evalErrorVar;
    }

    errorLastEval() {
      return errorLastEvalVar;
    }

    resetEvalError() {
      evalErrorVar = false;
	  errorLastEvalVar = false;
      lastEvalError = null;
    }

    evalErrorName() {
      if (lastEvalError == null) {
        return "";
      }
      return lastEvalError.name;
    }

    evalErrorMessage() {
      if (lastEvalError == null) {
        return "";
      }
      return lastEvalError.message;
    }

    evalErrorStack() {
      if (lastEvalError == null) {
        return "";
      }
      return lastEvalError.stack;
    }

    evalErrorToString() {
      if (lastEvalError == null) {
        return "";
      }
      return lastEvalError.toString();
    }

    evalErrorToJSON() {
      if (lastEvalError == null) {
        return "";
      }
      return JSON.stringify(lastEvalError, Object.getOwnPropertyNames(lastEvalError));
    }
  }
  Scratch.extensions.register(new AdvancedNumericalEncoding());
})(Scratch);
