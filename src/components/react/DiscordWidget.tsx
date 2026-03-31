interface DiscordWidgetProps {
  serverId?: string;
}

export default function DiscordWidget({ serverId = '530653671193706496' }: DiscordWidgetProps) {
  return (
    <div className="border border-[rgba(158,151,131,0.1)] rounded overflow-hidden">
      <iframe
        src={`https://discordapp.com/widget?id=${serverId}&theme=dark`}
        width="100%"
        height="400"
        allowTransparency
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    </div>
  );
}
