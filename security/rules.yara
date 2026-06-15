rule HalalGuard_Keylogger_Behavior
{
    meta:
        description = "Detects binary attempting to listen to direct hardware keyboard device streams"
        author = "Halal OS Security Team"
        severity = "High"

    strings:
        $dev_kbd = "/dev/input/event" ascii wide
        $io_grab = "EVIOCGRAB" ascii wide
        $read_key = "readkey" ascii wide

    condition:
        $dev_kbd and ($io_grab or $read_key)
}

rule HalalGuard_Telemetry_Collector
{
    meta:
        description = "Detects hidden background processes collecting metrics and reporting to external telemetry servers"
        author = "Halal OS Security Team"
        severity = "Medium"

    strings:
        $telemetry = "telemetry.org" ascii wide nocase
        $metrics = "metrics_uploader" ascii wide nocase
        $ping = "/ping/analytics" ascii wide

    condition:
        any of them
}
