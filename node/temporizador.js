const schedule = require('node-schedule')

//vai ser executador em quarta feira, qualquer mês, qualquer dia do mês, às 10 horas, qualquer minuto e de 5 em 5 segundos
//igual ao formato do cron
const tarefa1 = schedule.scheduledJobs('*/5 * 12 * * 3', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa1!')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //segunda à sexta
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduledJobs(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
