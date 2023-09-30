import Input from "./Input";
import Output from "./Output";

export default function Command({ command, output, onSubmit }) {
  return (
    <div>
      <Input command={command} onSubmit={(command) => onSubmit(command.toLowerCase())} />
      {output && <Output output={output} />}
    </div>
  );
}
