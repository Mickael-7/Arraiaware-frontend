import type { Role } from "./RH";

export type CommitteeTab = 'equalizacao' | 'insights' | 'exportacao' | 'mentor' | 'mentorar';

export interface CommitteeCollaboratorsEvaluations{
  id: string;
  collaboratorName: string; 
  collaboratorRole: string;
  collaboratorId: string;
  cycleName: string;
  cycleId: string;
  status: 'Completo' | 'Parcial' | 'Pendente';
  selfEvaluationScore: number;
  peerEvaluationScore: number;
  managerEvaluationScore: number;
  finalScore?: number;      // posso adicionar/editar
  observation?: string;     // posso adicionar/editar
  genAisummary: string | null;  
}

export interface CommitteePanelTable{
  evaluations: CommitteeCollaboratorsEvaluations [];
  pagination: {
        totalItems: number;
        totalPages: number;
        currentPage: number;
    }
}

export interface SummaryApiResponse {
  summary: string;
}

export interface EvaluationConsolidatedView {
  collaboratorId: string,
  collaboratorName: string,
  cycleId: string,
  cycleName: string,
  consolidatedCriteria: [
    {
      criterionId: string,
      criterionName: string,
      selfEvaluation: {
        score: number | null,
        justification: string;
      },
      leaderEvaluation: {
        score: number | null,
        justification: string
      },
      peerEvaluation: {
        score: number | null,
        justification: string
      },
      hasDiscrepancy: true
    }
  ],
  peerFeedbacks: [
    {
      evaluatorName: string,
      pointsToImprove: string,
      pointsToExplore: string
    }
  ],
  referenceFeedbacks: [
    {
      indicatedName: string,
      justification: string
    }
  ],
  referencesReceived: [
    {
      indicatorName: string,
      justification: string
    }
  ]
}

export interface CommitteeSummary{
  readyEvaluations: number;
  overallAverage: number;
  totalCollaborators: number;
  pendingEvaluations: number;
}

export interface MenteeUser {
  id: string;
  name: string;
  email: string;
  userType: string;
  isActive: boolean;
  roles: Role[];
}

export interface ApiResponse {
  data: MenteeUser[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export interface BrutalFacts{
  menteeName: number;
  menteeId: number;
  selfEvaluationScore: number;
  peerEvaluationScore: number;
  leaderEvaluationScore: number;
  finalScore: number;
  projectName: string;
  projectId: string;
  cycleName: string;
  cycleId: string;
  aiBriefing: string;
}

export interface CommitteInsightsInfo{
  cycles: cycleCommitteInsightsInfo[];
  cyclesAmount: number;
  score: number;
  projectsAmount: number;
  activeProjects: number;
  activeCollaborators:number;
}

export interface cycleCommitteInsightsInfo{
  cycleName: string;
  cycleId: string;
  pendingEvaluations: number;
  readyEvaluations: number;
  overallAverage: number;
  projectsInCycle:number;
  totalCollaborators:number;
}

