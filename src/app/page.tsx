import GeneratorClient from "./GeneratorClient"
import { SITE_SETTINGS } from "@/config/settings"

export default function Home() {
  return <GeneratorClient settings={SITE_SETTINGS} />
}
