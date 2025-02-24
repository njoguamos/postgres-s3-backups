import { envsafe, str } from "envsafe";

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_URL: str({
    desc: 'The connection string of the database to backup.'
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: 'The cron schedule to run the backup on.',
    default: '0 5 * * *',
    allowEmpty: true
  }),
  AWS_S3_ENDPOINT: str({
    desc: 'The S3 custom endpoint you want to use.',
    default: '',
    allowEmpty: true,
  }),
  BACKUP_FILE_FORMAT: str({
    desc: 'The custom archive file format e.g dump, bak.',
    default: 'dump',
    allowEmpty: true,
  }),
  AWS_BACKUP_FOLDER: str({
    desc: 'Specify back up folder. e.g My-App-01-DB-Backups',
    default: '',
    allowEmpty: true,
  })
})
