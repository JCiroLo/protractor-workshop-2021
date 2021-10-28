import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'
import { AwesomeReport } from 'jasmine-awesome-report'

export let reporter = () => {
  jasmine.getEnv().addReporter(
    new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    })
  )
  jasmine.getEnv().addReporter(
    AwesomeReport.getReport({
      fullPath: 'awesome-report',
      fileName: 'report',
      merge: true
    })
  )
}
