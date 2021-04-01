let host = '127.0.0.1:3000'
if (!IS_DEV) {
  host = '192.168.23.24:8080'
}
export default host