export default function getConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
