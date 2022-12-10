export function Footer({
  githubTitle = "",
  githubUrl = "",
  linkedinTitle = "",
  linkedinUrl = "",
}) {
  return (
    <footer id="sandbox-title">
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <code>{githubTitle}</code>
      </a>
      <a href={linkedinUrl} target="_blank" rel="noreferrer">
        <code>{linkedinTitle}</code>
      </a>
    </footer>
  );
}
